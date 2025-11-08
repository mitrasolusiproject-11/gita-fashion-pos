import { NextRequest, NextResponse } from 'next/server'
import { signIn, createToken } from '@/lib/auth-simple'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log('Login attempt for:', email)

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const user = await signIn(email, password)
    if (!user) {
      console.log('Login failed: Invalid credentials')
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    console.log('Login successful for:', email)
    const token = createToken(user)
    
    const response = NextResponse.json({ user })
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return response
  } catch (error) {
    console.error('Auth error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ 
      error: 'Authentication failed',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ message: 'Logged out' })
  response.cookies.delete('auth-token')
  return response
}