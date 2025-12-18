import type { Asset, Trade } from '@/types';

export interface AssetDetailsScreenProps {
  asset: Asset;
  position: {
    quantity: number;
    avgBuyPrice: number;
    totalCost: number;
    currentValue: number;
    pnl: number;
    pnlPercent: number;
  };
  trades: Trade[];
  onAddTrade: () => void;
  onEditAsset: () => void;
  onEditTrade: (tradeId: string) => void;
  onDeleteTrade: (tradeId: string) => void;
  onBack: () => void;
}
