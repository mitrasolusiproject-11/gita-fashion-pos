const bcrypt = require('bcryptjs')
const Database = require('better-sqlite3')
const crypto = require('crypto')

// Get database path from environment variable
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'sqlite.db'

console.log('🌱 Seeding database at:', dbPath)

const sqlite = new Database(dbPath)

// NOTE: pure-Node implementation (no TS import) so it works inside the
// production container where the TypeScript source is not compiled.
function nowIso() {
  return Math.floor(Date.now() / 1000) // unix timestamp stored as integer
}

function uuid() {
  return crypto.randomUUID()
}

function seed() {
  try {
    const tableExists = (name) => {
      const row = sqlite.prepare(
        "SELECT name FROM sqlite_master WHERE type='table' AND name = ?"
      ).get(name)
      return !!row
    }

    if (!tableExists('users')) {
      throw new Error('Tabel "users" tidak ditemukan — jalankan migrasi dulu (drizzle-kit migrate)')
    }

    console.log('👤 Creating admin user...')
    const hashedAdminPassword = bcrypt.hashSync('admin123', 10)
    const insertUser = sqlite.prepare(`
      INSERT OR IGNORE INTO users (id, email, name, password, role, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `)
    insertUser.run(uuid(), 'admin@gitafashion.com', 'Administrator', hashedAdminPassword, 'ADMIN', nowIso(), nowIso())

    console.log('👤 Creating cashier user...')
    const hashedCashierPassword = bcrypt.hashSync('kasir123', 10)
    insertUser.run(uuid(), 'kasir@gitafashion.com', 'Kasir 1', hashedCashierPassword, 'CASHIER', nowIso(), nowIso())

    console.log('📦 Creating categories...')
    const insertCategory = sqlite.prepare(`
      INSERT OR IGNORE INTO categories (id, name, created_at, updated_at)
      VALUES (?, ?, ?, ?)
    `)
    const categoryData = ['Atasan', 'Bawahan', 'Dress', 'Aksesoris', 'Sepatu']
    for (const name of categoryData) {
      insertCategory.run(uuid(), name, nowIso(), nowIso())
    }

    console.log('✅ Database seeded successfully!')
    console.log('👤 Admin login: admin@gitafashion.com / admin123')
    console.log('👤 Cashier login: kasir@gitafashion.com / kasir123')

    sqlite.close()
    process.exit(0)
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    sqlite.close()
    process.exit(1)
  }
}

seed()
