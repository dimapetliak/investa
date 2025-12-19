import { Spacing } from '@/theme';
import { ViewProps } from 'react-native';

export type SpacerSize = keyof typeof Spacing;

export type SpacerProps = ViewProps & {
  size?: SpacerSize;
  horizontal?: boolean;
};


