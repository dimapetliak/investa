import { Trade } from '../../portfolio.types';

export type TradesSectionProps = {
  trades?: Trade[];
  onViewTrade: (tradeId: string) => void;
};

