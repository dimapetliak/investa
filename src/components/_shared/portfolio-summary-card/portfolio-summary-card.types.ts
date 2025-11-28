import { CardProps } from '../card/card.types';

export type PortfolioSummaryCardProps = Omit<CardProps, 'children'> & {
  totalValue: string | number;
  totalPnL: number;
  totalPnLPercent: number;
  totalCost: number;
  onPress?: () => void;
};

