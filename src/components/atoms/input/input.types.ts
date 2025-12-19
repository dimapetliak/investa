import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  hint?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
};

