import { ViewProps } from 'react-native';

export type ProgressBarProps = ViewProps & {
  /** Current progress value */
  current: number;
  /** Target value (100%) */
  target: number;
  /** Custom progress bar color */
  color?: string;
  /** Show current/target value labels above bar */
  showValueLabels?: boolean;
  /** Show percentage text below bar */
  showPercentage?: boolean;
  /** @deprecated Use showValueLabels instead. Shows both labels and percentage. */
  showLabels?: boolean;
  /** Custom value formatter */
  formatValue?: (value: number) => string;
};

