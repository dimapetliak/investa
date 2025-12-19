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

export type AssetsScreenProps = {
  positions?: Position[];
  onAddAsset: () => void;
  onViewAsset: (ticker: string) => void;
  onSearch?: (query: string) => void;
  onFilterToggle?: (filter: string | number) => void;
};

