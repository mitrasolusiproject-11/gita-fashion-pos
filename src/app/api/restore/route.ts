import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getSession } from '@/lib/auth-simple'
import { 
  users, 
  categories, 
  products, 
  transactions, 
  outgoingItems, 
  settings, 
  shifts, 
  expenses 
} from '@/lib/schema'

const CHUNK_SIZE = 100

export async function POST(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized - Admin access required' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No backup file uploaded' }, { status: 400 })
    }

    if (!file.name.endsWith('.json')) {
      return NextResponse.json({ error: 'Invalid file format. Please upload a JSON backup file.' }, { status: 400 })
    }

    const text = await file.text()
    let backupData: any

    try {
      backupData = JSON.parse(text)
    } catch (error) {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 })
    }

    // Validate backup structure
    if (!backupData.metadata || !backupData.data) {
      return NextResponse.json({ error: 'Invalid backup file structure' }, { status: 400 })
    }

    const { data } = backupData
    let restoredCount = 0
    const errors: string[] = []

    // Map backup user IDs to local user IDs (matched by email, fallback by role)
    // Needed because user restore is skipped, while transactions/shifts/expenses
    // reference user IDs from the machine where the backup was taken.
    const localUsers = await db.select().from(users)
    const userIdMap = new Map<string, string>()
    for (const backupUser of (data.users || [])) {
      let localUser = localUsers.find((u) => u.email.toLowerCase() === (backupUser.email || '').toLowerCase())
      if (!localUser) localUser = localUsers.find((u) => u.role === backupUser.role)
      if (!localUser) localUser = localUsers.find((u) => u.role === 'ADMIN')
      if (localUser) userIdMap.set(backupUser.id, localUser.id)
    }
    const fallbackUserId = localUsers.find((u) => u.role === 'ADMIN')?.id || localUsers[0]?.id
    console.log(`👤 User mapping ready: ${userIdMap.size} users matched`)

    /**
     * Insert rows in chunks with a per-row fallback:
     * fast when data is clean, granular error reporting when it is not.
     */
    const insertChunked = async (
      rows: any[],
      insertBatch: (chunk: any[]) => Promise<unknown>,
      restoreRow: (row: any) => Promise<void>,
      getLabel: (row: any) => string
    ) => {
      for (let i = 0; i < rows.length; i += CHUNK_SIZE) {
        const chunk = rows.slice(i, i + CHUNK_SIZE)
        try {
          await insertBatch(chunk)
          restoredCount += chunk.length
        } catch (batchError) {
          // Fallback: report only the individual failing rows
          for (const row of chunk) {
            try {
              await restoreRow(row)
              restoredCount++
            } catch (error) {
              errors.push(`${getLabel(row)}: ${error instanceof Error ? error.message : 'Unknown error'}`)
            }
          }
        }
      }
    }

    try {
      // Clear existing data first (safer approach)
      console.log('🗑️ Clearing existing data...')
      
      // Delete in reverse order of dependencies
      await db.delete(outgoingItems)
      await db.delete(transactions)
      await db.delete(expenses)
      await db.delete(shifts)
      await db.delete(products)
      await db.delete(categories)
      // Keep users for authentication
      
      console.log('✅ Existing data cleared')
      
      // Restore in order to respect foreign key constraints
      
      // 1. Categories first (no dependencies)
      if (data.categories && Array.isArray(data.categories) && data.categories.length > 0) {
        console.log(`📂 Restoring ${data.categories.length} categories...`)
        const categoryRows = data.categories.map((category: any) => ({
          id: category.id,
          name: category.name,
          createdAt: new Date(category.createdAt),
          updatedAt: new Date(category.updatedAt || category.createdAt)
        }))
        await insertChunked(
          categoryRows,
          async (chunk) => { await db.insert(categories).values(chunk) },
          async (row) => { await db.insert(categories).values(row) },
          (row) => `Category ${row.name}`
        )
        console.log(`✅ Categories restored: ${data.categories.length}`)
      }

      // 2. Users (skip - keep existing users for authentication)
      console.log('👤 Skipping users restore (keeping existing users for security)')
      
      // Note: We don't restore users to prevent authentication issues
      // Admin can manually recreate users if needed

      // 3. Products (depends on categories)
      if (data.products && Array.isArray(data.products) && data.products.length > 0) {
        console.log(`📦 Restoring ${data.products.length} products...`)
        const productRows = data.products.map((product: any) => ({
          id: product.id,
          barcode: product.barcode,
          name: product.name,
          categoryId: product.categoryId,
          initialStock: product.initialStock,
          currentStock: product.currentStock,
          sellPrice: product.sellPrice,
          createdAt: new Date(product.createdAt),
          updatedAt: new Date(product.updatedAt || product.createdAt)
        }))
        await insertChunked(
          productRows,
          async (chunk) => { await db.insert(products).values(chunk) },
          async (row) => { await db.insert(products).values(row) },
          (row) => `Product ${row.name}`
        )
        console.log(`✅ Products restored: ${data.products.length}`)
      }

      // 4. Settings (upsert by key, small dataset - keep per-row)
      if (data.settings && Array.isArray(data.settings)) {
        for (const setting of data.settings) {
          try {
            const settingData = {
              ...setting,
              createdAt: setting.createdAt ? new Date(setting.createdAt) : new Date(),
              updatedAt: setting.updatedAt ? new Date(setting.updatedAt) : new Date()
            }
            await db.insert(settings).values(settingData).onConflictDoUpdate({
              target: settings.key,
              set: {
                value: setting.value,
                updatedAt: new Date()
              }
            })
            restoredCount++
          } catch (error) {
            errors.push(`Setting ${setting.key}: ${error instanceof Error ? error.message : 'Unknown error'}`)
          }
        }
      }

      // 5. Transactions (depends on users)
      if (data.transactions && Array.isArray(data.transactions) && data.transactions.length > 0) {
        console.log(`📦 Restoring ${data.transactions.length} transactions...`)
        const transactionRows = data.transactions.map((transaction: any) => ({
          ...transaction,
          userId: userIdMap.get(transaction.userId) || fallbackUserId,
          transactionDate: transaction.transactionDate ? new Date(transaction.transactionDate) : null,
          createdAt: transaction.createdAt ? new Date(transaction.createdAt) : new Date(),
          updatedAt: transaction.updatedAt ? new Date(transaction.updatedAt) : new Date()
        }))
        await insertChunked(
          transactionRows,
          async (chunk) => { await db.insert(transactions).values(chunk) },
          async (row) => {
            await db.insert(transactions).values(row).onConflictDoUpdate({
              target: transactions.code,
              set: {
                totalItems: row.totalItems,
                cashAmount: row.cashAmount,
                transferAmount: row.transferAmount,
                bankName: row.bankName,
                paymentStatus: row.paymentStatus,
                updatedAt: new Date()
              }
            })
          },
          (row) => `Transaction ${row.code}`
        )
        console.log(`✅ Transactions restored: ${data.transactions.length}`)
      }

      // 6. Outgoing Items (depends on transactions)
      if (data.outgoingItems && Array.isArray(data.outgoingItems) && data.outgoingItems.length > 0) {
        console.log(`📦 Restoring ${data.outgoingItems.length} outgoing items...`)
        const outgoingRows = data.outgoingItems.map((item: any) => ({
          ...item,
          date: item.date ? new Date(item.date) : new Date(),
          createdAt: item.createdAt ? new Date(item.createdAt) : new Date()
        }))
        await insertChunked(
          outgoingRows,
          async (chunk) => { await db.insert(outgoingItems).values(chunk) },
          async (row) => { await db.insert(outgoingItems).values(row) },
          (row) => `Outgoing Item ${row.id}`
        )
        console.log(`✅ Outgoing Items restored: ${data.outgoingItems.length}`)
      }

      // 7. Shifts (depends on users)
      if (data.shifts && Array.isArray(data.shifts) && data.shifts.length > 0) {
        console.log(`📦 Restoring ${data.shifts.length} shifts...`)
        const shiftRows = data.shifts.map((shift: any) => ({
          ...shift,
          userId: userIdMap.get(shift.userId) || fallbackUserId,
          startTime: new Date(shift.startTime),
          endTime: shift.endTime ? new Date(shift.endTime) : null,
          createdAt: shift.createdAt ? new Date(shift.createdAt) : new Date(),
          updatedAt: shift.updatedAt ? new Date(shift.updatedAt) : new Date()
        }))
        const restoreShiftRow = async (row: any) => {
          await db.insert(shifts).values(row).onConflictDoUpdate({
            target: shifts.id,
            set: {
              endTime: row.endTime,
              endingCash: row.endingCash,
              totalSales: row.totalSales,
              totalTransactions: row.totalTransactions,
              totalExpenses: row.totalExpenses,
              status: row.status,
              notes: row.notes,
              updatedAt: new Date()
            }
          })
        }
        await insertChunked(
          shiftRows,
          async (chunk) => { await db.insert(shifts).values(chunk) },
          restoreShiftRow,
          (row) => `Shift ${row.id}`
        )
        console.log(`✅ Shifts restored: ${data.shifts.length}`)
      }

      // 8. Expenses (depends on users and shifts)
      if (data.expenses && Array.isArray(data.expenses) && data.expenses.length > 0) {
        console.log(`📦 Restoring ${data.expenses.length} expenses...`)
        const expenseRows = data.expenses.map((expense: any) => ({
          ...expense,
          userId: userIdMap.get(expense.userId) || fallbackUserId,
          createdAt: expense.createdAt ? new Date(expense.createdAt) : new Date(),
          updatedAt: expense.updatedAt ? new Date(expense.updatedAt) : new Date()
        }))
        await insertChunked(
          expenseRows,
          async (chunk) => { await db.insert(expenses).values(chunk) },
          async (row) => { await db.insert(expenses).values(row) },
          (row) => `Expense ${row.id}`
        )
        console.log(`✅ Expenses restored: ${data.expenses.length}`)
      }

      return NextResponse.json({
        success: true,
        message: `Database restored successfully. ${restoredCount} records processed.`,
        restoredCount,
        errorCount: errors.length,
        errors: errors.slice(0, 10), // Limit to first 10 errors
        metadata: backupData.metadata
      })

    } catch (error) {
      console.error('Error during restore:', error)
      return NextResponse.json({ 
        error: 'Error during restore process', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Error restoring database:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'
