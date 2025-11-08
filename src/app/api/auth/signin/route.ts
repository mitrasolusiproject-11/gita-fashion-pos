import { NextRequest, NextResponse } from 'next/server'
import { signIn, createToken } from '@/lib/auth-simple'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    const user = await signIn(email, password)
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = createToken(user)
    
    const response = NextResponse.json({ user })
    
    // Set cookie with appropriate settings
    // Auto-detect HTTPS based on environment
    const isProduction = process.env.NODE_ENV === 'production'
    const isHttps = request.headers.get('x-forwarded-proto') === 'https'
    
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: isProduction && isHttps, // Enable secure flag for HTTPS
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/' // Ensure cookie is available for all paths
    })
    
    console.log('✅ Cookie set for user:', user.email)
    return response
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'