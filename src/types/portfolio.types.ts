import type { Asset } from './asset.types';
import type { Trade } from './trade.types';

export interface Position {
  asset: Asset;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  totalCost: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  trades: Trade[];
}

export interface PortfolioSummary {
  totalValue: number;
  totalCost: number;
  totalPnL: number;
  totalPnLPercent: number;
  positionsCount: number;
}

export type PortfolioFilter = 'all' | 'stock' | 'crypto';
