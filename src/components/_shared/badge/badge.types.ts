import { ViewStyle } from 'react-native';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'outline';
export type BadgeSize = 'sm' | 'md';

export type BadgeProps = {
  children: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
};
