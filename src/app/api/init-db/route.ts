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
      id: 'admin-' + Date.now(),
      name: 'Administrator',
      email: 'admin@gitafashion.com',
      password: hashedPassword,
      role: 'ADMIN',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    // Create default categories
    const defaultCategories = [
      { id: 'cat-001', name: 'Pakaian', description: 'Kategori pakaian' },
      { id: 'cat-002', name: 'Aksesoris', description: 'Kategori aksesoris' },
      { id: 'cat-003', name: 'Sepatu', description: 'Kategori sepatu' },
      { id: 'cat-004', name: 'Tas', description: 'Kategori tas' },
      { id: 'cat-005', name: 'Lainnya', description: 'Kategori lainnya' }
    ]

    for (const category of defaultCategories) {
      await db.insert(categories).values({
        ...category,
        createdAt: new Date(),
        updatedAt: new Date()
      })
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
