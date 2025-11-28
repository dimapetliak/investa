export interface SelectOption {
  label: string;
  value: string | number;
}

export type SelectProps = {
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | number;
  onChangeValue?: (value: string | number) => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: any;
};

