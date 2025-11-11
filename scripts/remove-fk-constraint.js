#!/usr/bin/env node

/**
 * Migration script to remove foreign key constraint from outgoing_items table
 * This is needed because SQLite doesn't support ALTER TABLE DROP CONSTRAINT
 * We need to recreate the table without the constraint
 */

const Database = require('better-sqlite3')
const path = require('path')

const dbPath = process.env.DATABASE_URL?.replace('file:', '') || path.join(process.cwd(), 'sqlite.db')

console.log('🔧 Starting migration: Remove FK constraint from outgoing_items')
console.log('📁 Database:', dbPath)

try {
  const db = new Database(dbPath)
  
  // Disable foreign keys temporarily
  db.pragma('foreign_keys = OFF')
  
  // Start transaction
  db.exec('BEGIN TRANSACTION')
  
  // Create new table without FK constraint
  db.exec(`
    CREATE TABLE IF NOT EXISTS outgoing_items_new (
      id TEXT PRIMARY KEY,
      date INTEGER,
      barcode TEXT NOT NULL,
      product_name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      transaction_code TEXT NOT NULL,
      price REAL NOT NULL,
      discount_percent REAL NOT NULL DEFAULT 0,
      discount_amount REAL NOT NULL DEFAULT 0,
      created_at INTEGER
    )
  `)
  
  // Copy data from old table to new table
  db.exec(`
    INSERT INTO outgoing_items_new 
    SELECT * FROM outgoing_items
  `)
  
  // Drop old table
  db.exec('DROP TABLE outgoing_items')
  
  // Rename new table to original name
  db.exec('ALTER TABLE outgoing_items_new RENAME TO outgoing_items')
  
  // Commit transaction
  db.exec('COMMIT')
  
  // Re-enable foreign keys
  db.pragma('foreign_keys = ON')
  
  console.log('✅ Migration completed successfully')
  console.log('📊 Outgoing items table recreated without FK constraint')
  
  db.close()
  process.exit(0)
  
} catch (error) {
  console.error('❌ Migration failed:', error)
  process.exit(1)
}
