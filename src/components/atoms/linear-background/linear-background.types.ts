import { ColorValue, ViewProps } from 'react-native';

export type LinearBackgroundProps = ViewProps & {
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  children: React.ReactNode;
};

