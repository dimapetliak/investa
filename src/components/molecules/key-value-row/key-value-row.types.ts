import { ViewProps } from 'react-native';

export type KeyValueRowColor = 'default' | 'positive' | 'negative' | 'muted' | 'primary' | 'error' | 'success';

export type KeyValueRowProps = ViewProps & {
  label: string;
  value: string | React.ReactNode;
  valueColor?: KeyValueRowColor | string;
};

