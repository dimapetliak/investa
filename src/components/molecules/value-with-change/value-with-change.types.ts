import { ViewProps } from 'react-native';

export type ValueWithChangeData = {
  value: string;
  percentage: string;
  isPositive: boolean;
};

export type ValueWithChangeSize = 'sm' | 'md' | 'lg' | 'large';

export type ValueWithChangeProps = ViewProps & {
  value: string;
  change?: number;
  changePercent?: number;
  size?: ValueWithChangeSize;
  label?: string;
};

