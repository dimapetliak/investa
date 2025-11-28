import { ViewProps } from 'react-native';

export type SectionHeaderProps = ViewProps & {
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
};

