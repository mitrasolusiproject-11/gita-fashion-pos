const Database = require('better-sqlite3')

// Connect to database
const db = new Database('sqlite.db')

// Daftar kode transaksi yang mau dihapus
const transactionCodes = [
  'TRX1762739730925',
  // Tambahkan kode transaksi lainnya yang mau dihapus
]

function deleteTransactions() {
  console.log('🗑️  Starting deletion...\n')
  
  let successCount = 0
  let errorCount = 0
  
  const deleteItems = db.prepare('DELETE FROM outgoing_items WHERE transaction_code = ?')
  const deleteTransaction = db.prepare('DELETE FROM transactions WHERE code = ?')
  
  for (const code of transactionCodes) {
    try {
      console.log(`🗑️  Deleting transaction: ${code}`)
      
      // 1. Delete items first (foreign key)
      const itemsResult = deleteItems.run(code)
      console.log(`   ✅ Deleted ${itemsResult.changes} items`)
      
      // 2. Delete transaction
      const transactionResult = deleteTransaction.run(code)
      console.log(`   ✅ Deleted transaction`)
      
      successCount++
      console.log(`   ✅ Transaction ${code} deleted successfully!\n`)
      
    } catch (error) {
      errorCount++
      console.error(`   ❌ Error deleting ${code}:`, error.message)
      console.log('')
    }
  }
  
  console.log('='.repeat(50))
  console.log(`✅ Deletion completed!`)
  console.log(`   Success: ${successCount} transactions`)
  console.log(`   Failed: ${errorCount} transactions`)
  console.log('='.repeat(50))
  
  db.close()
}

deleteTransactions()
