import { AssetType } from '@/components/atoms/asset-badge/asset-badge.types';

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

export type InvestmentSummary = {
  totalValue: number;
  totalCost: number;
  totalPnL: number;
  totalPnLPercent: number;
  positionsCount: number;
};

export type AssetsScreenProps = {
  positions?: Position[];
  summary?: InvestmentSummary;
  onAddAsset: () => void;
  onViewAsset: (ticker: string) => void;
  onSearch?: (query: string) => void;
  onFilterToggle?: (filter: string | number) => void;
  /** Called when user taps refresh button to sync prices */
  onRefresh?: () => void;
  /** Whether refresh is in progress */
  isRefreshing?: boolean;
};

