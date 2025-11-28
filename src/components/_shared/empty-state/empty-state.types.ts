import { Ionicons } from '@expo/vector-icons';
import { ViewProps } from 'react-native';

export type EmptyStateProps = ViewProps & {
  icon?: keyof typeof Ionicons.glyphMap;
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

