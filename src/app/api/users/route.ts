import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users } from '@/lib/schema'
import { getSession } from '@/lib/auth-simple'
import bcrypt from 'bcryptjs'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const allUsers = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt
    }).from(users).orderBy(users.createdAt)

    return NextResponse.json(allUsers)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { email, name, password, role } = body

    console.log('Creating user:', { email, name, role })

    // Validate required fields
    if (!email || !name || !password || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Password hashed successfully')

    const [newUser] = await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
      role
    }).returning({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt
    })

    console.log('User created successfully:', newUser.email)
    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'