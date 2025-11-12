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

    const { action } = await request.json()

    let result = ''

    switch (action) {
      case 'check':
        // Check disk usage
        const diskUsage = await execAsync('df -h / | tail -1')
        const dbSize = await execAsync('du -sh /app/data/sqlite.db 2>/dev/null || echo "N/A"').catch(() => ({ stdout: 'N/A' }))
        
        result = `Disk Usage:\n${diskUsage.stdout}\n\nDatabase Size:\n${dbSize.stdout}`
        break

      case 'docker-images':
        // Remove unused Docker images
        const imagesResult = await execAsync('docker image prune -af --filter "until=24h"')
        result = `Docker images cleaned:\n${imagesResult.stdout}`
        break

      case 'docker-cache':
        // Remove build cache
        const cacheResult = await execAsync('docker builder prune -af --filter "until=24h"')
        result = `Build cache cleaned:\n${cacheResult.stdout}`
        break

      case 'docker-containers':
        // Remove stopped containers
        const containersResult = await execAsync('docker container prune -f')
        result = `Stopped containers removed:\n${containersResult.stdout}`
        break

      case 'full':
        // Full cleanup
        await execAsync('docker image prune -af --filter "until=24h"')
        await execAsync('docker builder prune -af --filter "until=24h"')
        await execAsync('docker container prune -f')
        await execAsync('docker volume prune -f')
        await execAsync('docker network prune -f')
        
        const finalDisk = await execAsync('df -h / | tail -1')
        result = `Full cleanup completed!\n\nFinal disk usage:\n${finalDisk.stdout}`
        break

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: result
    })

  } catch (error) {
    console.error('Cleanup error:', error)
    return NextResponse.json({ 
      error: 'Cleanup failed', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
