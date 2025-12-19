export type PositionCardAssetType = 'stock' | 'crypto' | 'cash' | 'bank' | 'card' | 'savings';

export type PositionCardProps = {
  ticker: string;
  name?: string;
  assetType: PositionCardAssetType;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  currency?: string;
  onPress?: () => void;
};

