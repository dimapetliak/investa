import { ViewProps } from 'react-native';

export type LabelProps = ViewProps & {
  text: string;
  required?: boolean;
};

