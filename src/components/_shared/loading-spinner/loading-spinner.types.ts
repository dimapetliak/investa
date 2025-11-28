import { ActivityIndicatorProps, ViewProps } from 'react-native';

export type LoadingSpinnerProps = ViewProps & {
  message?: string;
  size?: ActivityIndicatorProps['size'];
  color?: string;
};

