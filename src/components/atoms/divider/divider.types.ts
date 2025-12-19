import { ViewProps } from 'react-native';
import { Spacing } from '@/theme/spacing';

export type DividerProps = ViewProps & {
  spacing?: keyof typeof Spacing;
};

