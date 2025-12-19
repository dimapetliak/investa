import { ViewProps } from 'react-native';

export type SectionHeaderProps = ViewProps & {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  rightAction?: React.ReactNode;  // Alias for action
};

