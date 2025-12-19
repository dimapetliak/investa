import { Spacing } from '@/theme';
import { ViewProps } from 'react-native';

export type ContainerProps = ViewProps & {
  padding?: keyof typeof Spacing;
  children: React.ReactNode;
};

