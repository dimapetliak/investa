import { ViewProps } from 'react-native';

export type PriceChipProps = ViewProps & {
  price: number;
  timestamp?: string;
  change?: number;
  changePercent?: number;
};

