import type { StyleProp, ViewStyle } from 'react-native';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /** Content to display (number or string) */
  value?: number | string;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  /** Show as a dot without value */
  dot?: boolean;
  /** Maximum number to display before showing + */
  max?: number;
  /** Additional styles */
  style?: StyleProp<ViewStyle>;
}

