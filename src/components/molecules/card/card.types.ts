import { ViewProps } from 'react-native';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | '2xl';

export type CardBackgroundVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export type CardProps = ViewProps & {
  padding?: CardPadding;
  /** Add subtle shadow for elevation */
  elevated?: boolean;
  /** @deprecated Use elevated instead */
  shadow?: boolean;
  /** Add border instead of shadow */
  bordered?: boolean;
  backgroundVariant?: CardBackgroundVariant;
  onPress?: () => void;
  children: React.ReactNode;
};

