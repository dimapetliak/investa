import { ViewProps } from 'react-native';
import { AssetType } from '../asset-tag/asset-tag.types';

export type TradeType = 'buy' | 'sell';

export type TradeRowProps = ViewProps & {
  ticker: string;
  assetType: AssetType;
  type: TradeType;
  price: number;
  quantity: number;
  date: string;
  onPress?: () => void;
};

