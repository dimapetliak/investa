import { TextInputProps } from 'react-native';

export type NumberInputProps = Omit<TextInputProps, 'value' | 'onChangeText'> & {
  label?: string;
  value: string;
  onChangeValue: (value: string) => void;
  error?: string;
  hint?: string;
  prefix?: string;
  suffix?: string;
};


