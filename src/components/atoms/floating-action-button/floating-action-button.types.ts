import { Ionicons } from '@expo/vector-icons';
import { PressableProps } from 'react-native';

export type FloatingActionButtonProps = Omit<PressableProps, 'style'> & {
  icon: keyof typeof Ionicons.glyphMap;
  position?: {
    bottom?: number;
    right?: number;
    top?: number;
    left?: number;
  };
};

