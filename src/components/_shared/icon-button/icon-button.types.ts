import { ViewStyle } from 'react-native';

export type IconButtonVariant = 'default' | 'primary' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonProps = {
  icon: React.ReactNode;
  onPress?: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  style?: ViewStyle;
};

