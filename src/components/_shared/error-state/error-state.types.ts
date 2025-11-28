import { ViewProps } from 'react-native';

export type ErrorStateProps = ViewProps & {
  title?: string;
  message?: string;
  retryLabel?: string;
  onRetry?: () => void;
};

