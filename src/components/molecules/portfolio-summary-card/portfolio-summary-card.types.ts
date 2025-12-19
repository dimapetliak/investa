export type PortfolioSummaryCardProps = {
  totalValue: number;
  totalPnL: number;
  totalPnLPercent: number;
  totalCost: number;
  currency?: string;
  onPress?: () => void;
};

