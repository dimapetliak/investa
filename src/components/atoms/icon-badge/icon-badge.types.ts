import type { StyleProp, ViewStyle } from 'react-native';

export type IconBadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'purple' | 'lime' | 'custom';
export type IconBadgeSize = 'sm' | 'md' | 'lg';

export interface IconBadgeProps {
  /** Icon name from Ionicons */
  icon: string;
  /** Visual variant */
  variant?: IconBadgeVariant;
  /** Size of the badge */
  size?: IconBadgeSize;
  /** Custom background color (use with variant="custom") */
  backgroundColor?: string;
  /** Custom icon color (use with variant="custom") */
  iconColor?: string;
  /** Additional styles */
  style?: StyleProp<ViewStyle>;
}

