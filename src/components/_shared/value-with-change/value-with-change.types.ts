import { ViewProps } from 'react-native';

export type ValueWithChangeProps = ViewProps & {
  value: string | number;
  change: number;
  changePercent: number;
  size?: 'sm' | 'md' | 'lg';
  showSign?: boolean;
};

