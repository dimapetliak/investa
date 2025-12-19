export interface InvestmentSnapshotProps {
  totalValue: number;
  pnl: number;
  pnlPercent: number;
  positionsCount: number;
  lastUpdated: string | null;
  currency?: string;
  onPress?: () => void;
}

