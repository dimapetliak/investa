export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | number;
  onChangeValue: (value: string | number) => void;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
};

