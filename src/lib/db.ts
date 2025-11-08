import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from './schema'

// Get database path from environment variable or use default
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'sqlite.db'

const sqlite = new Database(dbPath)
export const db = drizzle(sqlite, { schema })

export default db