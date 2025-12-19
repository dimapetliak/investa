import { ViewProps } from 'react-native';

export type ProgressBarProps = ViewProps & {
  current: number;
  target: number;
  color?: string;
  showLabels?: boolean;
  formatValue?: (value: number) => string;
};

