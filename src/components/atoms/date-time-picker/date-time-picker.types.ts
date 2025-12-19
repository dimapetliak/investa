export type DateTimePickerMode = 'date' | 'time' | 'datetime';

export type DateTimePickerProps = {
  label?: string;
  value?: Date;
  onChangeValue: (date: Date) => void;
  mode?: DateTimePickerMode;
  error?: string;
  minimumDate?: Date;
  maximumDate?: Date;
};

