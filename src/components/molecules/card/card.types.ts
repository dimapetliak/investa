import { ViewProps } from 'react-native';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | '2xl';

export type CardBackgroundVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export type CardProps = ViewProps & {
  padding?: CardPadding;
  elevated?: boolean;
  shadow?: boolean;
  backgroundVariant?: CardBackgroundVariant;
  onPress?: () => void;
  children: React.ReactNode;
};

