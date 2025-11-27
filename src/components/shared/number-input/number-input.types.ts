import type { InputProps } from "../Input/input.types";

export interface NumberInputProps extends Omit<InputProps, "keyboardType"> {
  value?: number;
  onChangeValue?: (value: number | undefined) => void;
  min?: number;
  max?: number;
  decimalPlaces?: number;
}

