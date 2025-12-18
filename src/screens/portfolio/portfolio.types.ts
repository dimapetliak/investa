import { AssetType } from '@/components/_shared/asset-tag/asset-tag.types';
import { TradeType } from '@/components/_shared/trade-row/trade-row.types';

export type PortfolioSummary = {
  totalValue: string | number;
  totalPnL: number;
  totalPnLPercent: number;
  totalCost: number;
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

export type PortfolioScreenProps = {
  portfolioSummary?: PortfolioSummary;
  recentTrades?: Trade[];
  onAddTrade: () => void;
  onViewTrade: (tradeId: string) => void;
  onViewAllAssets: () => void;
  onSearch?: (query: string) => void;
  onFilterToggle?: (filter: string | number) => void;
};

