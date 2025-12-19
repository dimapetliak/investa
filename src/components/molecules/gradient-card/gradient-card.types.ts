import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type GradientPreset = 'indigo' | 'purple' | 'lime' | 'blue' | 'orange' | 'pink';

export interface GradientCardProps {
  /** Child content */
  children: ReactNode;
  /** Preset gradient colors */
  preset?: GradientPreset;
  /** Custom gradient colors (overrides preset) */
  colors?: readonly [string, string, ...string[]];
  /** Gradient start point */
  start?: { x: number; y: number };
  /** Gradient end point */
  end?: { x: number; y: number };
  /** Card padding */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Border radius */
  borderRadius?: number;
  /** Press handler */
  onPress?: () => void;
  /** Additional styles */
  style?: StyleProp<ViewStyle>;
}

