import { useAssetsStore, usePortfolioStore, useTradesStore } from '@/store';
import { useMemo } from 'react';

/**
 * Derived data types for the Home screen
 */
export interface NetWorthData {
  total: number;
  accountsValue: number; // Cash / Bank accounts - placeholder for future
  investmentsValue: number;
  savingsValue: number; // Placeholder for savings goals
  change: number;
  changePercent: number;
}

export interface InvestmentSnapshot {
  totalValue: number;
  totalCost: number;
  pnl: number;
  pnlPercent: number;
  positionsCount: number;
  lastUpdated: string | null;
}

export interface SavingsGoalSnapshot {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  progressPercent: number;
}

export interface RecentActivityItem {
  id: string;
  type: 'trade' | 'transaction';
  label: string;
  amount: number;
  date: string;
  isPositive: boolean;
}

export interface HomeData {
  netWorth: NetWorthData;
  investments: InvestmentSnapshot;
  savingsGoals: SavingsGoalSnapshot[];
  recentActivity: RecentActivityItem[];
  isLoading: boolean;
  hasData: boolean;
}

// Placeholder savings data (will be replaced with real store)
const PLACEHOLDER_SAVINGS_GOALS: SavingsGoalSnapshot[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 6500,
    progressPercent: 65,
  },
  {
    id: '2',
    name: 'Vacation',
    targetAmount: 5000,
    currentAmount: 2100,
    progressPercent: 42,
  },
];

const PLACEHOLDER_ACCOUNTS_VALUE = 5000; // Cash / Bank placeholder
const PLACEHOLDER_SAVINGS_VALUE = 21500; // Total savings placeholder

/**
 * Hook that provides all derived data for the Home screen.
 * Uses memoization to avoid unnecessary recomputations.
 */
export function useHomeData(): HomeData {
  const assets = useAssetsStore((state) => state.assets);
  const trades = useTradesStore((state) => state.trades);
  const positions = usePortfolioStore((state) => state.positions);
  const portfolioSummary = usePortfolioStore((state) => state.summary);
  const assetsHydrated = useAssetsStore((state) => state.isHydrated);
  const tradesHydrated = useTradesStore((state) => state.isHydrated);

  // Investment Snapshot - derived from portfolio store
  const investments = useMemo<InvestmentSnapshot>(() => {
    return {
      totalValue: portfolioSummary.totalValue,
      totalCost: portfolioSummary.totalCost,
      pnl: portfolioSummary.totalPnL,
      pnlPercent: portfolioSummary.totalPnLPercent,
      positionsCount: portfolioSummary.positionsCount,
      lastUpdated: trades.length > 0
        ? new Date(Math.max(...trades.map(t => new Date(t.timestamp).getTime()))).toISOString()
        : null,
    };
  }, [portfolioSummary, trades]);

  // Net Worth - aggregation of all financial data
  const netWorth = useMemo<NetWorthData>(() => {
    const accountsValue = PLACEHOLDER_ACCOUNTS_VALUE;
    const savingsValue = PLACEHOLDER_SAVINGS_VALUE;
    const investmentsValue = portfolioSummary.totalValue;
    
    const total = accountsValue + investmentsValue + savingsValue;
    
    // For now, change is just investment P&L (future: include transaction-based changes)
    const change = portfolioSummary.totalPnL;
    const changePercent = total > 0 ? (change / total) * 100 : 0;

    return {
      total,
      accountsValue,
      investmentsValue,
      savingsValue,
      change,
      changePercent,
    };
  }, [portfolioSummary]);

  // Savings Goals - placeholder data for now
  const savingsGoals = useMemo<SavingsGoalSnapshot[]>(() => {
    // Return max 2 goals for the home screen
    return PLACEHOLDER_SAVINGS_GOALS.slice(0, 2);
  }, []);

  // Recent Activity - last 3 trades/transactions
  const recentActivity = useMemo<RecentActivityItem[]>(() => {
    // Map trades to activity items
    const tradeActivities: RecentActivityItem[] = trades
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 3)
      .map((trade) => {
        const asset = assets.find(a => a.id === trade.assetId);
        const isBuy = trade.type === 'buy';
        const totalAmount = trade.quantity * trade.price;
        
        return {
          id: trade.id,
          type: 'trade' as const,
          label: `${isBuy ? 'Bought' : 'Sold'} ${asset?.ticker || 'Unknown'}`,
          amount: totalAmount,
          date: trade.timestamp,
          isPositive: !isBuy, // Sell is positive (money in), buy is negative (money out)
        };
      });

    return tradeActivities;
  }, [trades, assets]);

  // Loading state
  const isLoading = !assetsHydrated || !tradesHydrated;

  // Has data check
  const hasData = positions.length > 0 || trades.length > 0;

  return {
    netWorth,
    investments,
    savingsGoals,
    recentActivity,
    isLoading,
    hasData,
  };
}

/**
 * Selector for just net worth (for components that only need this)
 */
export function useNetWorth() {
  const portfolioSummary = usePortfolioStore((state) => state.summary);
  
  return useMemo(() => {
    const total = PLACEHOLDER_ACCOUNTS_VALUE + portfolioSummary.totalValue + PLACEHOLDER_SAVINGS_VALUE;
    return {
      total,
      change: portfolioSummary.totalPnL,
      changePercent: total > 0 ? (portfolioSummary.totalPnL / total) * 100 : 0,
    };
  }, [portfolioSummary]);
}

/**
 * Selector for investment snapshot only
 */
export function useInvestmentSnapshot() {
  const portfolioSummary = usePortfolioStore((state) => state.summary);
  
  return useMemo(() => ({
    totalValue: portfolioSummary.totalValue,
    pnl: portfolioSummary.totalPnL,
    pnlPercent: portfolioSummary.totalPnLPercent,
    positionsCount: portfolioSummary.positionsCount,
  }), [portfolioSummary]);
}

