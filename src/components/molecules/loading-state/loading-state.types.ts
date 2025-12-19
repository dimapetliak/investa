import { ViewProps } from 'react-native';

export type LoadingStateProps = ViewProps & {
  message?: string;
  size?: 'small' | 'large';
};

