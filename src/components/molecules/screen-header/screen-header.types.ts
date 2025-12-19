import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface ScreenHeaderProps {
  /** Screen title */
  title: string;
  /** Show back button */
  showBack?: boolean;
  /** Back button handler */
  onBack?: () => void;
  /** Right side action (icon button or custom element) */
  rightAction?: ReactNode;
  /** Additional styles */
  style?: ViewStyle;
}

