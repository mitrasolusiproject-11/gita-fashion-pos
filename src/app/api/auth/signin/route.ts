import { NextRequest, NextResponse } from 'next/server'
import { signIn, createToken } from '@/lib/auth-simple'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log('🔐 Login attempt for:', email)

    const user = await signIn(email, password)
    if (!user) {
      console.log('❌ Login failed for:', email)
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    console.log('✅ Login successful for:', email)
    const token = createToken(user)
    
    const response = NextResponse.json({ user })
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/' // Ensure cookie is available for all paths
    })
    return response
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'