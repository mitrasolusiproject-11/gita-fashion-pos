import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { transactions, outgoingItems, users } from '@/lib/schema'
import { getSession } from '@/lib/auth-simple'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    if (!file.name.endsWith('.csv')) {
      return NextResponse.json({ error: 'File must be CSV format' }, { status: 400 })
    }

    const content = await file.text()
    const lines = content.trim().split('\n')
    
    if (lines.length < 2) {
      return NextResponse.json({ error: 'CSV file is empty' }, { status: 400 })
    }

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
    
    // Detect CSV format
    const hasDetailColumns = headers.includes('barcode') || headers.includes('productName')
    const hasSummaryColumns = headers.includes('Kode Transaksi') || headers.includes('Tanggal Transaksi')
    
    // Handle summary format (without items)
    if (hasSummaryColumns && !hasDetailColumns) {
      return NextResponse.json({ 
        error: 'Format CSV tidak didukung', 
        details: 'File CSV harus berisi detail items (barcode, productName, quantity, price). Format summary transaksi tidak didukung.'
      }, { status: 400 })
    }
    
    // Parse CSV
    const rows = []
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue
      
      const values = lines[i].match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g) || []
      const row: any = {}
      
      headers.forEach((header, index) => {
        let value = values[index] ? values[index].trim().replace(/^"|"$/g, '') : ''
        row[header] = value
      })
      
      rows.push(row)
    }

    // Group by transaction
    const transactionsMap: any = {}
    let skippedRows = 0
    
    rows.forEach((row, index) => {
      const code = row.code || row.transactionCode
      const transactionDate = row.transactionDate || row.date
      
      // Skip rows with missing or invalid data
      if (!code || code.trim() === '') {
        skippedRows++
        return
      }
      
      if (!transactionDate || transactionDate.trim() === '' || transactionDate === '#N/A') {
        skippedRows++
        return
      }
      
      if (!transactionsMap[code]) {
        transactionsMap[code] = {
          code: code,
          transactionDate: transactionDate,
          cashAmount: parseFloat(row.cashAmount || 0),
          transferAmount: parseFloat(row.transferAmount || 0),
          bankName: row.bankName || null,
          paymentStatus: row.paymentStatus || 'PAID',
          userId: row.userId || session.id,
          items: []
        }
      }
      
      transactionsMap[code].items.push({
        barcode: row.barcode,
        productName: row.productName,
        quantity: parseInt(row.quantity || 1),
        price: parseFloat(row.price || 0),
        discountPercent: parseFloat(row.discountPercent || 0),
        discountAmount: parseFloat(row.discountAmount || 0)
      })
    })

    const transactionsList = Object.values(transactionsMap)
    
    // Calculate totalItems
    transactionsList.forEach((t: any) => {
      t.totalItems = t.items.reduce((sum: number, item: any) => sum + item.quantity, 0)
    })

    let successCount = 0
    let skipCount = 0
    let errorCount = 0
    const errors: string[] = []

    // Import transactions
    for (const transaction of transactionsList) {
      try {
        // Check if exists
        const existing = await db.select().from(transactions).where(eq(transactions.code, transaction.code)).limit(1)
        
        if (existing.length > 0) {
          skipCount++
          continue
        }

        // Validate userId exists
        const userExists = await db.select().from(users).where(eq(users.id, transaction.userId)).limit(1)
        if (userExists.length === 0) {
          errorCount++
          errors.push(`${transaction.code}: User ID ${transaction.userId} not found`)
          continue
        }

        // Parse date
        let dateStr = transaction.transactionDate.replace(/(\d{2})\.(\d{2})\.(\d{2})/, '$1:$2:$3')
        const dateObj = new Date(dateStr)
        
        if (isNaN(dateObj.getTime())) {
          errorCount++
          errors.push(`${transaction.code}: Invalid date format ${transaction.transactionDate}`)
          continue
        }
        
        const transactionDate = Math.floor(dateObj.getTime() / 1000)
        const now = Math.floor(Date.now() / 1000)

        // Insert transaction first
        await db.insert(transactions).values({
          id: crypto.randomUUID(),
          code: transaction.code,
          transactionDate: new Date(transactionDate * 1000),
          totalItems: transaction.totalItems,
          cashAmount: transaction.cashAmount,
          transferAmount: transaction.transferAmount,
          bankName: transaction.bankName,
          paymentStatus: transaction.paymentStatus,
          userId: transaction.userId,
          createdAt: new Date(transactionDate * 1000),
          updatedAt: new Date(now * 1000)
        })

        // Then insert items (foreign key will work now)
        for (const item of transaction.items) {
          try {
            await db.insert(outgoingItems).values({
              id: crypto.randomUUID(),
              date: new Date(transactionDate * 1000),
              barcode: item.barcode,
              productName: item.productName,
              quantity: item.quantity,
              transactionCode: transaction.code,
              price: item.price,
              discountPercent: item.discountPercent || 0,
              discountAmount: item.discountAmount || 0,
              createdAt: new Date(now * 1000)
            })
          } catch (itemError) {
            console.error(`Error inserting item for ${transaction.code}:`, itemError)
            throw itemError
          }
        }

        successCount++
      } catch (error) {
        errorCount++
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'
        errors.push(`${transaction.code}: ${errorMsg}`)
        console.error(`Transaction ${transaction.code} error:`, error)
      }
    }

    return NextResponse.json({
      success: true,
      message: `Import completed. ${skippedRows} rows skipped due to invalid data.`,
      summary: {
        total: transactionsList.length,
        success: successCount,
        skipped: skipCount,
        failed: errorCount,
        invalidRows: skippedRows
      },
      errors: errors.slice(0, 10)
    })

  } catch (error) {
    console.error('Import error:', error)
    return NextResponse.json({ 
      error: 'Import failed', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
