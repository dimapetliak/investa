import { ViewProps } from 'react-native';

export type TickerBadgeProps = ViewProps & {
  ticker: string;
  size?: 'sm' | 'md' | 'lg';
};

