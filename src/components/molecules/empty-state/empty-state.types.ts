import { Ionicons } from '@expo/vector-icons';
import type { ButtonProps } from '../../atoms/button/button.types';

export type EmptyStateProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionVariant?: ButtonProps['variant'];
};

