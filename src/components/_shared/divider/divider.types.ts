import { Spacing } from '@/theme/spacing';
import { ViewProps } from 'react-native';

export type DividerProps = ViewProps & {
  vertical?: boolean;
  spacing?: keyof typeof Spacing;
  color?: string;
};

