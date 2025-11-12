const Database = require('better-sqlite3')
const crypto = require('crypto')

// Connect to database
const db = new Database('sqlite.db')

// ============================================
// DATA TRANSAKSI LAMA
// ============================================

const oldTransactions = [
  {
    code: 'OLD001',
    transactionDate: '2024-01-15 10:30:00',
    totalItems: 2,
    cashAmount: 600000,
    transferAmount: 0,
    bankName: null,
    paymentStatus: 'PAID',
    userId: 'c5c38a4b-2341-4b5c-9feb-fc2599819d78', // Ganti dengan ID user yang valid
    items: [
      {
        barcode: 'GF60954',
        productName: 'Marina kancing',
        quantity: 1,
        price: 30000,
        discountPercent: 0,
        discountAmount: 0
      },
      {
        barcode: 'GF82437',
        productName: 'Marina Gradasi',
        quantity: 1,
        price: 300000,
        discountPercent: 0,
        discountAmount: 0
      }
    ]
  },
  // Tambahkan transaksi lainnya di sini...
]

// ============================================
// FUNGSI HELPER
// ============================================

function generateId() {
  return crypto.randomUUID()
}

function showUsers() {
  console.log('📋 Available Users:\n')
  
  const users = db.prepare('SELECT id, email, name, role FROM users').all()
  
  users.forEach(user => {
    console.log(`ID: ${user.id}`)
    console.log(`Name: ${user.name}`)
    console.log(`Email: ${user.email}`)
    console.log(`Role: ${user.role}`)
    console.log('-'.repeat(50))
  })
  
  db.close()
}

function importTransactions() {
  console.log('🚀 Starting import...\n')
  
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
  
  for (const transaction of oldTransactions) {
    try {
      console.log(`📦 Importing transaction: ${transaction.code}`)
      
      // Validate userId exists
      const userExists = db.prepare('SELECT id FROM users WHERE id = ?').get(transaction.userId)
      if (!userExists) {
        throw new Error(`User ID not found: ${transaction.userId}`)
      }
      
      // Convert to seconds (SQLite timestamp format)
      const transactionDate = Math.floor(new Date(transaction.transactionDate).getTime() / 1000)
      const now = Math.floor(Date.now() / 1000)
      
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
// RUN SCRIPT
// ============================================

// Uncomment salah satu:

// 1. Untuk melihat daftar user (jalankan ini dulu)
//showUsers()

// 2. Untuk import transaksi (setelah userId sudah diisi)
importTransactions()
