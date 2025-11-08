import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users, categories } from '@/lib/schema'
import bcrypt from 'bcryptjs'

/**
 * Emergency database initialization endpoint
 * Access: GET /api/init-db?secret=your-secret
 * 
 * This will create admin user and default categories
 */
export async function GET(request: Request) {
  try {
    // Simple security check
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    
    if (secret !== process.env.INIT_SECRET && secret !== 'init-gita-fashion-2024') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if admin already exists
    const existingUsers = await db.select().from(users).limit(1)
    
    if (existingUsers.length > 0) {
      return NextResponse.json({ 
        message: 'Database already initialized',
        users: existingUsers.length 
      })
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    await db.insert(users).values({
      name: 'Administrator',
      email: 'admin@gitafashion.com',
      password: hashedPassword,
      role: 'ADMIN'
    })

    // Create default categories
    const defaultCategories = [
      { name: 'Pakaian', description: 'Kategori pakaian' },
      { name: 'Aksesoris', description: 'Kategori aksesoris' },
      { name: 'Sepatu', description: 'Kategori sepatu' },
      { name: 'Tas', description: 'Kategori tas' },
      { name: 'Lainnya', description: 'Kategori lainnya' }
    ]

    for (const category of defaultCategories) {
      await db.insert(categories).values(category)
    }

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully',
      admin: {
        email: 'admin@gitafashion.com',
        password: 'admin123'
      },
      categories: defaultCategories.length
    })

  } catch (error) {
    console.error('Init DB error:', error)
    return NextResponse.json({ 
      error: 'Failed to initialize database',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
