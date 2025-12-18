import { Ionicons } from '@expo/vector-icons';
import { DimensionValue, ViewStyle } from 'react-native';

export type FloatingActionButtonSize = 'sm' | 'md' | 'lg';

export type PositionSides = Partial<Record<'top' | 'left' | 'right' | 'bottom', DimensionValue>>;

export type FloatingActionButtonProps = {
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: FloatingActionButtonSize;
  disabled?: boolean;
  style?: ViewStyle;
  position?: PositionSides;
};

