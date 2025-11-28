import { Spacing } from '@/theme/spacing';
import { ViewProps } from 'react-native';

export type ContainerPadding = keyof typeof Spacing | number;

export type ContainerAlignment = 
  | 'start' 
  | 'center' 
  | 'end' 
  | 'stretch' 
  | 'space-between' 
  | 'space-around' 
  | 'space-evenly';

export type ContainerProps = ViewProps & {
  children: React.ReactNode;
  
  padding?: ContainerPadding;
  paddingHorizontal?: ContainerPadding;
  paddingVertical?: ContainerPadding;
  paddingTop?: ContainerPadding;
  paddingBottom?: ContainerPadding;
  paddingLeft?: ContainerPadding;
  paddingRight?: ContainerPadding;
  
  noPadding?: boolean;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
  noPaddingLeft?: boolean;
  noPaddingRight?: boolean;
  noPaddingHorizontal?: boolean;
  noPaddingVertical?: boolean;

  align?: ContainerAlignment;
  alignVertical?: ContainerAlignment;
  
  flex?: number;
  flexDirection?: 'row' | 'column';
  gap?: ContainerPadding;
  
  backgroundColor?: string;
  
  safeArea?: boolean;
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
};

