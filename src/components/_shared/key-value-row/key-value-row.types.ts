import { ViewProps } from 'react-native';
import { TextProps } from '../text/text.types';

export type KeyValueRowProps = ViewProps & {
  label: string;
  value: string | number;
  valueColor?: TextProps['color'];
  align?: 'space-between' | 'flex-end';
};

