const bcrypt = require('bcryptjs')
const Database = require('better-sqlite3')
const { drizzle } = require('drizzle-orm/better-sqlite3')
const { users, categories, products } = require('../src/lib/schema')

// Get database path from environment variable
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || 'sqlite.db'

console.log('🌱 Seeding database at:', dbPath)

const sqlite = new Database(dbPath)
const db = drizzle(sqlite)

async function seed() {
  try {
    console.log('👤 Creating admin user...')
    const hashedAdminPassword = await bcrypt.hash('admin123', 10)
    
    await db.insert(users).values({
      email: 'admin@gitafashion.com',
      name: 'Administrator',
      password: hashedAdminPassword,
      role: 'ADMIN'
    }).onConflictDoNothing()

    console.log('👤 Creating cashier user...')
    const hashedCashierPassword = await bcrypt.hash('kasir123', 10)
    
    await db.insert(users).values({
      email: 'kasir@gitafashion.com',
      name: 'Kasir 1',
      password: hashedCashierPassword,
      role: 'CASHIER'
    }).onConflictDoNothing()

    console.log('📦 Creating categories...')
    const categoryData = [
      { name: 'Atasan' },
      { name: 'Bawahan' },
      { name: 'Dress' },
      { name: 'Aksesoris' },
      { name: 'Sepatu' }
    ]

    for (const category of categoryData) {
      await db.insert(categories).values(category).onConflictDoNothing()
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
