import { InputProps } from '../input/input.types';

export type NumberInputProps = Omit<InputProps, 'value' | 'onChangeText'> & {
  value?: number | string;
  onChangeValue?: (value: string) => void;
  decimalPlaces?: number;
};

