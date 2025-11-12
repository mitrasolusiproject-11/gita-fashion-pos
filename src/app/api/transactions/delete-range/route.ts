import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { transactions, outgoingItems } from '@/lib/schema'
import { getSession } from '@/lib/auth-simple'
import { and, gte, lte, eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { startDate, endDate } = await request.json()

    if (!startDate || !endDate) {
      return NextResponse.json({ 
        error: 'Start date and end date are required' 
      }, { status: 400 })
    }

    const start = new Date(startDate)
    const end = new Date(endDate)
    end.setHours(23, 59, 59, 999) // End of day

    // Get transactions in range
    const transactionsToDelete = await db
      .select()
      .from(transactions)
      .where(
        and(
          gte(transactions.transactionDate, start),
          lte(transactions.transactionDate, end)
        )
      )

    if (transactionsToDelete.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No transactions found in the specified date range',
        deletedCount: 0
      })
    }

    // Delete outgoing items first
    let itemsDeleted = 0
    for (const transaction of transactionsToDelete) {
      const result = await db
        .delete(outgoingItems)
        .where(eq(outgoingItems.transactionCode, transaction.code))
      itemsDeleted++
    }

    // Delete transactions
    const deletedCount = await db
      .delete(transactions)
      .where(
        and(
          gte(transactions.transactionDate, start),
          lte(transactions.transactionDate, end)
        )
      )

    return NextResponse.json({
      success: true,
      message: `Deleted ${transactionsToDelete.length} transactions and their items`,
      deletedCount: transactionsToDelete.length,
      itemsDeleted
    })

  } catch (error) {
    console.error('Delete transactions error:', error)
    return NextResponse.json({ 
      error: 'Failed to delete transactions', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
