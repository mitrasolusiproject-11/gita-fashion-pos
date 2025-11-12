const Database = require('better-sqlite3')
const fs = require('fs')
const crypto = require('crypto')

// Connect to database
const db = new Database('sqlite.db')

// ============================================
// KONFIGURASI
// ============================================

// Path ke file CSV Anda
// Ganti dengan path file CSV Anda
const CSV_FILE = './data-import.csv'

// User ID yang akan digunakan untuk semua transaksi
// Ganti dengan ID user yang valid (jalankan showUsers() untuk melihat)
const DEFAULT_USER_ID = 'c5c38a4b-2341-4b5c-9feb-fc2599819d78' // Admin

// ============================================
// FUNGSI HELPER
// ============================================

function generateId() {
  return crypto.randomUUID()
}

function parseCSV(content) {
  const lines = content.trim().split('\n')
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''))
  
  console.log('📋 CSV Headers:', headers)
  
  const data = []
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue // Skip empty lines
    
    // Handle quoted values
    const values = lines[i].match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g) || []
    const row = {}
    
    headers.forEach((header, index) => {
      let value = values[index] ? values[index].trim().replace(/^"|"$/g, '') : ''
      row[header] = value
    })
    
    console.log(`Row ${i}:`, row.code, '|', row.transactionDate)
    data.push(row)
  }
  
  return data
}

function groupTransactions(rows) {
  const transactions = {}
  
  rows.forEach(row => {
    const code = row.code || row.transactionCode
    
    if (!transactions[code]) {
      transactions[code] = {
        code: code,
        transactionDate: row.transactionDate || row.date,
        cashAmount: parseFloat(row.cashAmount || 0),
        transferAmount: parseFloat(row.transferAmount || 0),
        bankName: row.bankName || null,
        paymentStatus: row.paymentStatus || 'PAID',
        userId: row.userId || DEFAULT_USER_ID,
        items: []
      }
    }
    
    // Add item
    transactions[code].items.push({
      barcode: row.barcode,
      productName: row.productName,
      quantity: parseInt(row.quantity || 1),
      price: parseFloat(row.price || 0),
      discountPercent: parseFloat(row.discountPercent || 0),
      discountAmount: parseFloat(row.discountAmount || 0)
    })
  })
  
  // Calculate totalItems for each transaction
  Object.values(transactions).forEach(t => {
    t.totalItems = t.items.reduce((sum, item) => sum + item.quantity, 0)
  })
  
  return Object.values(transactions)
}

function importFromCSV() {
  console.log('🚀 Starting CSV import...\n')
  
  // Read CSV file
  if (!fs.existsSync(CSV_FILE)) {
    console.error(`❌ File not found: ${CSV_FILE}`)
    console.log('\nBuat file CSV dengan format:')
    console.log('code,transactionDate,barcode,productName,quantity,price,cashAmount,transferAmount,bankName,paymentStatus')
    console.log('OLD001,2024-01-15 10:30:00,GF001001,Kemeja Putih,1,85000,85000,0,,PAID')
    db.close()
    return
  }
  
  const content = fs.readFileSync(CSV_FILE, 'utf-8')
  const rows = parseCSV(content)
  const transactions = groupTransactions(rows)
  
  console.log(`📊 Found ${transactions.length} transactions with ${rows.length} items\n`)
  
  let successCount = 0
  let errorCount = 0
  
  // Prepare statements
  const insertTransaction = db.prepare(`
    INSERT INTO transactions (
      id, code, transaction_date, total_items, cash_amount, transfer_amount,
      bank_name, payment_status, user_id, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  
  const insertItem = db.prepare(`
    INSERT INTO outgoing_items (
      id, date, barcode, product_name, quantity, transaction_code,
      price, discount_percent, discount_amount, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  
  // Enable foreign keys
  db.pragma('foreign_keys = ON')
  
  for (const transaction of transactions) {
    try {
      console.log(`📦 Importing transaction: ${transaction.code}`)
      
      // Check if transaction already exists
      const existingTransaction = db.prepare('SELECT code FROM transactions WHERE code = ?').get(transaction.code)
      if (existingTransaction) {
        console.log(`   ⏭️  Transaction ${transaction.code} already exists, skipping...`)
        successCount++
        continue
      }
      
      // Validate userId exists
      const userExists = db.prepare('SELECT id FROM users WHERE id = ?').get(transaction.userId)
      if (!userExists) {
        throw new Error(`User ID not found: ${transaction.userId}`)
      }
      
      // Parse date - handle various formats
      // Replace dots with colons for time: 12.56.03 → 12:56:03
      let dateStr = transaction.transactionDate.replace(/(\d{2})\.(\d{2})\.(\d{2})/, '$1:$2:$3')
      
      let dateObj
      if (dateStr.includes('/')) {
        // Format: DD/MM/YYYY or MM/DD/YYYY
        const parts = dateStr.split(/[\/\s:]/)
        dateObj = new Date(parts[2], parts[1] - 1, parts[0], parts[3] || 0, parts[4] || 0, parts[5] || 0)
      } else {
        // Format: YYYY-MM-DD HH:mm:ss
        dateObj = new Date(dateStr)
      }
      
      console.log(`   📅 Date: ${transaction.transactionDate} → ${dateObj.toISOString()}`)
      
      // Convert to seconds (SQLite timestamp format)
      const transactionDate = Math.floor(dateObj.getTime() / 1000)
      const now = Math.floor(Date.now() / 1000)
      
      if (isNaN(transactionDate)) {
        throw new Error(`Invalid date format: ${transaction.transactionDate}`)
      }
      
      // 1. Insert transaction
      insertTransaction.run(
        generateId(),
        transaction.code,
        transactionDate,
        transaction.totalItems,
        transaction.cashAmount,
        transaction.transferAmount,
        transaction.bankName,
        transaction.paymentStatus,
        transaction.userId,
        transactionDate,
        now
      )
      console.log(`   ✅ Transaction inserted`)
      
      // 2. Insert items
      for (const item of transaction.items) {
        insertItem.run(
          generateId(),
          transactionDate,
          item.barcode,
          item.productName,
          item.quantity,
          transaction.code,
          item.price,
          item.discountPercent || 0,
          item.discountAmount || 0,
          now
        )
        console.log(`   ✅ Item inserted: ${item.productName} (${item.quantity}x)`)
      }
      
      successCount++
      console.log(`   ✅ Transaction ${transaction.code} imported successfully!\n`)
      
    } catch (error) {
      errorCount++
      console.error(`   ❌ Error importing ${transaction.code}:`, error.message)
      console.log('')
    }
  }
  
  console.log('='.repeat(50))
  console.log(`✅ Import completed!`)
  console.log(`   Success: ${successCount} transactions`)
  console.log(`   Failed: ${errorCount} transactions`)
  console.log('='.repeat(50))
  
  db.close()
}

// ============================================
// RUN
// ============================================

importFromCSV()
