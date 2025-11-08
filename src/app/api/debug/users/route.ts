import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { users } from '@/lib/schema'

export async function GET() {
  try {
    const allUsers = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role
    }).from(users)
    
    return NextResponse.json({ 
      count: allUsers.length,
      users: allUsers 
    })
  } catch (error) {
    console.error('Debug users error:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export const runtime = 'nodejs'
