import { TextProps as RNTextProps } from 'react-native';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';
type TextColor = 'default' | 'muted' | 'primary' | 'error';


export type TextProps = RNTextProps & {
    variant?: TextVariant;
    color?: TextColor;
  }