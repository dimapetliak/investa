import { InputProps } from '../input/input.types';

export type SearchInputProps = InputProps & {
  onClear?: () => void;
};

