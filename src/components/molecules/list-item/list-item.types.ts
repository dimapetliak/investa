import { PressableProps } from 'react-native';

export type ListItemProps = Omit<PressableProps, 'style'> & {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showChevron?: boolean;
};

