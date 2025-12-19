import { TextProps as RNTextProps } from 'react-native';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small';

export type TextColor = 'default' | 'muted' | 'tertiary' | 'primary' | 'success' | 'error' | 'warning' | 'white';

export type TextWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export type TextProps = RNTextProps & {
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  children: React.ReactNode;
};

