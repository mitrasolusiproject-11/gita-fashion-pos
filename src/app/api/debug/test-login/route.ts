import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'

/**
 * Debug endpoint to test login functionality
 * GET /api/debug/test-login?email=admin@gitafashion.com
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email') || 'admin@gitafashion.com'

    // Check if user exists
    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1)

    if (!user) {
      return NextResponse.json({
        found: false,
        message: 'User not found',
        email,
        suggestion: 'Run /api/init-db?secret=init-gita-fashion-2024 to create admin user'
      })
    }

    // Test password hash
    const testPassword = 'admin123'
    const isValid = await bcrypt.compare(testPassword, user.password)

    return NextResponse.json({
      found: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        isActive: user.isActive
      },
      passwordTest: {
        testPassword,
        isValid,
        passwordHash: user.password.substring(0, 20) + '...'
      },
      database: {
        status: 'connected',
        totalUsers: await db.select().from(users).then(r => r.length)
      }
    })

  } catch (error) {
    console.error('Debug test-login error:', error)
    return NextResponse.json({
      error: 'Failed to test login',
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
