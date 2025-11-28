import { Ionicons } from '@expo/vector-icons';
import { ViewStyle } from 'react-native';

export type FloatingActionButtonSize = 'sm' | 'md' | 'lg';

export type FloatingActionButtonProps = {
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: FloatingActionButtonSize;
  disabled?: boolean;
  style?: ViewStyle;
};

