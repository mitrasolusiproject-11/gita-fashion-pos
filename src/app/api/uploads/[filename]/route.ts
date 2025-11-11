import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await context.params
    
    // Use different path for local vs production
    const isProduction = process.env.NODE_ENV === 'production'
    const filepath = isProduction
      ? join('/app/data/uploads', filename)
      : join(process.cwd(), 'data', 'uploads', filename)

    if (!existsSync(filepath)) {
      return new NextResponse('File not found', { status: 404 })
    }

    const fileBuffer = await readFile(filepath)
    
    // Determine content type based on file extension
    const ext = filename.split('.').pop()?.toLowerCase()
    const contentTypes: Record<string, string> = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'webp': 'image/webp'
    }
    
    const contentType = contentTypes[ext || ''] || 'application/octet-stream'

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    })
  } catch (error) {
    console.error('Error serving file:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export const runtime = 'nodejs'
