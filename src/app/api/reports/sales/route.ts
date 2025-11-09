import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { transactions, outgoingItems, expenses } from '@/lib/schema'
import { getSession } from '@/lib/auth-simple'
import { sql, and, gte, lte, eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request)
    if (!session || !['ADMIN', 'MANAGER'].includes(session.role)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const period = searchParams.get('period') || 'daily' // daily, monthly, yearly

    // Build date filter
    const filters = []
    if (startDate) {
      filters.push(gte(transactions.createdAt, new Date(startDate)))
    }
    if (endDate) {
      const end = new Date(endDate)
      end.setHours(23, 59, 59, 999)
      filters.push(lte(transactions.createdAt, end))
    }

    // Get all transactions with filters
    const allTransactions = await db
      .select()
      .from(transactions)
      .where(filters.length > 0 ? and(...filters) : undefined)
      .orderBy(transactions.createdAt)

    // Get expenses in the same period
    const expenseFilters = []
    if (startDate) {
      expenseFilters.push(gte(expenses.createdAt, new Date(startDate)))
    }
    if (endDate) {
      const end = new Date(endDate)
      end.setHours(23, 59, 59, 999)
      expenseFilters.push(lte(expenses.createdAt, end))
    }

    const allExpenses = await db
      .select()
      .from(expenses)
      .where(expenseFilters.length > 0 ? and(...expenseFilters) : undefined)

    const totalExpenses = allExpenses.reduce((sum, e) => sum + (e.amount || 0), 0)

    // Calculate summary
    const summary = {
      totalTransactions: allTransactions.length,
      totalRevenue: 0,
      totalCash: 0,
      totalTransfer: 0,
      totalItems: 0,
      totalExpenses
    }

    allTransactions.forEach(t => {
      summary.totalRevenue += (t.cashAmount || 0) + (t.transferAmount || 0)
      summary.totalCash += t.cashAmount || 0
      summary.totalTransfer += t.transferAmount || 0
      summary.totalItems += t.totalItems || 0
    })

    // Group by period
    const groupedData: Record<string, any> = {}
    
    allTransactions.forEach(t => {
      const date = new Date(t.createdAt)
      let key = ''
      
      if (period === 'daily') {
        key = date.toISOString().split('T')[0] // YYYY-MM-DD
      } else if (period === 'monthly') {
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}` // YYYY-MM
      } else if (period === 'yearly') {
        key = String(date.getFullYear()) // YYYY
      }

      if (!groupedData[key]) {
        groupedData[key] = {
          period: key,
          transactions: 0,
          revenue: 0,
          cash: 0,
          transfer: 0,
          items: 0
        }
      }

      groupedData[key].transactions += 1
      groupedData[key].revenue += (t.cashAmount || 0) + (t.transferAmount || 0)
      groupedData[key].cash += t.cashAmount || 0
      groupedData[key].transfer += t.transferAmount || 0
      groupedData[key].items += t.totalItems || 0
    })

    const chartData = Object.values(groupedData).sort((a: any, b: any) => 
      a.period.localeCompare(b.period)
    )

    // Get top selling products
    const topProducts = await db
      .select({
        productName: outgoingItems.productName,
        totalQuantity: sql<number>`sum(${outgoingItems.quantity})`,
        totalRevenue: sql<number>`sum(${outgoingItems.price} * ${outgoingItems.quantity})`
      })
      .from(outgoingItems)
      .groupBy(outgoingItems.productName)
      .orderBy(sql`sum(${outgoingItems.quantity}) desc`)
      .limit(10)

    return NextResponse.json({
      summary,
      chartData,
      topProducts,
      transactions: allTransactions
    })
  } catch (error) {
    console.error('Error fetching sales report:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'
