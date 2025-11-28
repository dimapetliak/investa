import { InputProps } from '../input/input.types';

export type DateTimePickerMode = 'date' | 'time' | 'datetime';

export type DateTimePickerProps = Omit<InputProps, 'value' | 'onChangeText' | 'editable'> & {
  value?: Date;
  onChangeValue?: (date: Date) => void;
  mode?: DateTimePickerMode;
};

