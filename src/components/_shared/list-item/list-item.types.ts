import { ViewProps } from 'react-native';

export type ListItemProps = ViewProps & {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

