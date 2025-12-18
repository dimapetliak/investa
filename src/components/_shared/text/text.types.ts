import { TextProps as RNTextProps } from 'react-native';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small';
type TextColor = 'default' | 'muted' | 'primary' | 'error' | 'success' | 'warning';


export type TextProps = RNTextProps & {
    variant?: TextVariant;
    color?: TextColor;
  }