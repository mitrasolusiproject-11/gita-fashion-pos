import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-simple'
import Database from 'better-sqlite3'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'sqlite.db'
    const db = new Database(dbPath)
    
    console.log('🔧 Starting FK constraint removal migration...')
    
    // Disable foreign keys temporarily
    db.pragma('foreign_keys = OFF')
    
    // Start transaction
    db.exec('BEGIN TRANSACTION')
    
    try {
      // Check if old table exists
      const tableExists = db.prepare(`
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name='outgoing_items'
      `).get()
      
      if (!tableExists) {
        db.exec('ROLLBACK')
        return NextResponse.json({ 
          success: false, 
          message: 'Table outgoing_items not found' 
        })
      }
      
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
      const copyResult = db.exec(`
        INSERT INTO outgoing_items_new 
        SELECT id, date, barcode, product_name, quantity, transaction_code, 
               price, discount_percent, discount_amount, created_at
        FROM outgoing_items
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
      
      db.close()
      
      return NextResponse.json({
        success: true,
        message: 'Foreign key constraint removed successfully. You can now import transactions.'
      })
      
    } catch (error) {
      db.exec('ROLLBACK')
      db.close()
      throw error
    }
    
  } catch (error) {
    console.error('Migration error:', error)
    return NextResponse.json({ 
      error: 'Migration failed', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
