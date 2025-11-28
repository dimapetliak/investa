import { ViewProps } from 'react-native';

export type HelperTextProps = ViewProps & {
  text?: string;
  type?: 'default' | 'error';
};

