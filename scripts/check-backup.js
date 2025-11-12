const fs = require('fs')

// Path ke file backup
const BACKUP_FILE = './backup.json' // Ganti dengan nama file backup Anda

if (!fs.existsSync(BACKUP_FILE)) {
  console.error(`❌ File not found: ${BACKUP_FILE}`)
  console.log('\nGanti BACKUP_FILE dengan path file backup Anda')
  process.exit(1)
}

const content = fs.readFileSync(BACKUP_FILE, 'utf-8')
const backup = JSON.parse(content)

console.log('📊 Backup File Analysis\n')
console.log('='.repeat(50))
console.log('Metadata:')
console.log(`  Backup Date: ${backup.metadata.backupDate}`)
console.log(`  Version: ${backup.metadata.version}`)
console.log('\nTotal Records:')
console.log(`  Users: ${backup.metadata.totalRecords.users}`)
console.log(`  Categories: ${backup.metadata.totalRecords.categories}`)
console.log(`  Products: ${backup.metadata.totalRecords.products}`)
console.log(`  Transactions: ${backup.metadata.totalRecords.transactions}`)
console.log(`  Outgoing Items: ${backup.metadata.totalRecords.outgoingItems}`)
console.log(`  Settings: ${backup.metadata.totalRecords.settings}`)
console.log(`  Shifts: ${backup.metadata.totalRecords.shifts}`)
console.log(`  Expenses: ${backup.metadata.totalRecords.expenses}`)
console.log('='.repeat(50))

// Check actual data
console.log('\nActual Data in File:')
console.log(`  Transactions: ${backup.data.transactions?.length || 0}`)
console.log(`  Outgoing Items: ${backup.data.outgoingItems?.length || 0}`)

if (backup.data.transactions && backup.data.transactions.length > 0) {
  console.log('\n✅ Transactions data exists in backup')
  console.log('\nFirst 3 transactions:')
  backup.data.transactions.slice(0, 3).forEach((t, i) => {
    console.log(`  ${i + 1}. Code: ${t.code}, Date: ${t.transactionDate || t.createdAt}`)
  })
} else {
  console.log('\n❌ No transactions data in backup!')
}
