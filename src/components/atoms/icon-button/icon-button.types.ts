import { PressableProps } from 'react-native';

export type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = Omit<PressableProps, 'style'> & {
  icon: React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
};

