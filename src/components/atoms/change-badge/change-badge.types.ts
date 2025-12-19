import type { StyleProp, ViewStyle } from 'react-native';

export type ChangeBadgeFormat = 'currency' | 'percent' | 'both';
export type ChangeBadgeSize = 'sm' | 'md';

export interface ChangeBadgeProps {
  /** The change value (positive, negative, or zero) */
  value: number;
  /** Optional percentage value */
  percentValue?: number;
  /** Display format */
  format?: ChangeBadgeFormat;
  /** Currency symbol for currency format */
  currency?: string;
  /** Size variant */
  size?: ChangeBadgeSize;
  /** Show arrow icon */
  showIcon?: boolean;
  /** Additional styles */
  style?: StyleProp<ViewStyle>;
}

