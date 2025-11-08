// Health check endpoint for Docker
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Basic health checks
    const healthStatus: any = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      database: { status: 'checking' },
      config: {}
    }

    // Check database connection
    try {
      const { db } = await import('@/lib/db')
      const { users } = await import('@/lib/schema')
      const userCount = await db.select().from(users).limit(1)
      
      healthStatus.database = {
        status: 'connected',
        initialized: userCount.length > 0,
        userCount: userCount.length
      }
    } catch (dbError) {
      healthStatus.database = {
        status: 'error',
        error: dbError instanceof Error ? dbError.message : 'Unknown',
        stack: dbError instanceof Error ? dbError.stack : undefined
      }
    }

    // Check environment variables
    healthStatus.config = {
      hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
      nextAuthUrl: process.env.NEXTAUTH_URL || 'not set',
      databaseUrl: process.env.DATABASE_URL || 'not set'
    }

    return NextResponse.json(healthStatus, { status: 200 })
  } catch (error) {
    console.error('Health check failed:', error)
    
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }, 
      { status: 500 }
    )
  }
}