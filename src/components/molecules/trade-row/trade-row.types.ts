export type TradeRowAssetType = 'stock' | 'crypto' | 'cash' | 'bank' | 'card' | 'savings';

export type TradeRowType = 'buy' | 'sell';

export type TradeRowProps = {
  ticker?: string;
  assetType?: TradeRowAssetType;
  type: TradeRowType;
  price: number;
  quantity: number;
  date: string;
  fee?: number;
  comment?: string;
  onPress?: () => void;
  onDelete?: () => void;
};

