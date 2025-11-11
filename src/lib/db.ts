import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './schema'

// Get database path from environment variable or use default
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'sqlite.db'

// Lazy initialization - only create connection when first accessed
let _db: ReturnType<typeof drizzle> | null = null

function getDb() {
  if (!_db) {
    const sqlite = new Database(dbPath)
    // Enable foreign key constraints
    sqlite.pragma('foreign_keys = ON')
    _db = drizzle(sqlite, { schema })
  }
  return _db
}

// Export as a getter to ensure lazy initialization
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(target, prop) {
    return getDb()[prop as keyof ReturnType<typeof drizzle>]
  }
})

export default db