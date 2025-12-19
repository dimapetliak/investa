import { Ionicons } from '@expo/vector-icons';
import { PressableProps } from 'react-native';

export type FloatingActionButtonProps = Omit<PressableProps, 'style'> & {
  /** Icon to display */
  icon: keyof typeof Ionicons.glyphMap;
  /** Position on screen */
  position?: {
    bottom?: number;
    right?: number;
    top?: number;
    left?: number;
  };
  /** Required for accessibility - describes the action */
  accessibilityLabel: string;
  /** Optional hint for additional context */
  accessibilityHint?: string;
};

