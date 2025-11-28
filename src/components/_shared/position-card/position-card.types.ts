import { AssetType } from '../asset-tag/asset-tag.types';
import { CardProps } from '../card/card.types';

export type PositionCardProps = Omit<CardProps, 'children'> & {
  ticker: string;
  assetType: AssetType;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  currentValue: string | number;
  pnl: number;
  pnlPercent: number;
  onPress?: () => void;
};

