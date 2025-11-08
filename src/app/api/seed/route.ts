import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { users, categories } from '@/lib/schema'

async function seedDatabase() {
  console.log('🌱 Starting manual seed...')
  
  // Create admin user
  console.log('👤 Creating admin user...')
  const hashedAdminPassword = await bcrypt.hash('admin123', 10)
  await db.insert(users).values({
    email: 'admin@gitafashion.com',
    name: 'Administrator',
    password: hashedAdminPassword,
    role: 'ADMIN'
  }).onConflictDoNothing()

  // Create cashier user
  console.log('👤 Creating cashier user...')
  const hashedCashierPassword = await bcrypt.hash('kasir123', 10)
  await db.insert(users).values({
    email: 'kasir@gitafashion.com',
    name: 'Kasir 1',
    password: hashedCashierPassword,
    role: 'CASHIER'
  }).onConflictDoNothing()

  // Create categories
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
}

export async function GET() {
  // Disable in production for security
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ 
      success: false,
      error: 'Seeding is disabled in production. Use init-db.sh during deployment.' 
    }, { status: 403 })
  }

  try {
    await seedDatabase()
    
    return NextResponse.json({ 
      success: true,
      message: 'Database seeded successfully',
      credentials: {
        admin: 'admin@gitafashion.com / admin123',
        cashier: 'kasir@gitafashion.com / kasir123'
      }
    })
  } catch (error) {
    console.error('❌ Seeding failed:', error)
    return NextResponse.json({ 
      success: false,
      error: String(error) 
    }, { status: 500 })
  }
}

export async function POST() {
  return GET()
}

export const runtime = 'nodejs'
