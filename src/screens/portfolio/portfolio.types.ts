import { AssetType } from '@/components/atoms/asset-badge/asset-badge.types';
import { TradeRowType as TradeType } from '@/components/molecules/trade-row/trade-row.types';

export type PortfolioSummary = {
  totalValue: string | number;
  totalPnL: number;
  totalPnLPercent: number;
  totalCost: number;
};

export type NetWorthSummary = {
  totalNetWorth: number;
  investmentsValue: number;
  savingsValue: number;
  investmentsPnL: number;
  investmentsPnLPercent: number;
};

export type Trade = {
  id: string;
  type: TradeType;
  assetType: AssetType;
  ticker: string;
  price: number;
  quantity: number;
  date: string;
  notes?: string;
};

export type Position = {
  ticker: string;
  assetType: AssetType;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
};

export type PortfolioScreenProps = {
  // User
  userName?: string;
  notificationCount?: number;
  onNotificationPress?: () => void;
  
  // Net worth summary
  netWorthSummary?: NetWorthSummary;
  
  // Legacy portfolio summary (for backward compatibility)
  portfolioSummary?: PortfolioSummary;
  recentPositions?: Position[];
  recentTrades?: Trade[];
  
  // Actions
  onAddAsset?: () => void;
  onAddTrade: () => void;
  onViewAsset?: (ticker: string) => void;
  onViewTrade: (tradeId: string) => void;
  onViewAllAssets: () => void;
  onSearch?: (query: string) => void;
  onFilterToggle?: (filter: string | number) => void;
};

