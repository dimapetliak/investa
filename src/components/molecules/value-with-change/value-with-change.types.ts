import { ViewProps } from 'react-native';

export type ValueWithChangeData = {
  value: string;
  percentage: string;
  isPositive: boolean;
};

export type ValueWithChangeSize = 'sm' | 'md' | 'lg';

export type ValueWithChangeProps = ViewProps & {
  value: string;
  change?: number;
  changePercent?: number;
  /** @deprecated Use 'lg' instead of 'large' */
  size?: ValueWithChangeSize | 'large';
  label?: string;
};

