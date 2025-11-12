import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth-simple'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Only allow check action - cleanup must be done from Coolify/SSH
    const diskUsage = await execAsync('df -h / 2>/dev/null || df -h').catch(() => ({ stdout: 'Unable to check' }))
    const dbSize = await execAsync('du -sh /app/data/sqlite.db 2>/dev/null || du -sh sqlite.db 2>/dev/null || echo "N/A"').catch(() => ({ stdout: 'N/A' }))
    const appSize = await execAsync('du -sh /app 2>/dev/null || du -sh . 2>/dev/null || echo "N/A"').catch(() => ({ stdout: 'N/A' }))
    
    const result = `📊 Disk Usage:\n${diskUsage.stdout}\n\n💾 Database Size:\n${dbSize.stdout}\n\n📁 App Size:\n${appSize.stdout}\n\n⚠️ To cleanup disk:\n1. Go to Coolify Dashboard\n2. Navigate to Server > Resources\n3. Click "Cleanup Unused Resources"\n\nOr via SSH:\ndocker system prune -a --volumes -f`

    return NextResponse.json({
      success: true,
      message: result
    })

  } catch (error) {
    console.error('Check error:', error)
    return NextResponse.json({ 
      error: 'Check failed', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
