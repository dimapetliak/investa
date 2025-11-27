import type { InputProps } from "../Input/input.types";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends Omit<InputProps, "value" | "onChangeText"> {
  options: SelectOption[];
  value?: string | number;
  onChangeValue?: (value: string | number | undefined) => void;
  placeholder?: string;
}

