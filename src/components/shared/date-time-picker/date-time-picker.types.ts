import type { InputProps } from "../Input/input.types";

export interface DateTimePickerProps extends Omit<InputProps, "value" | "onChangeText"> {
  value?: Date;
  onChangeValue?: (date: Date | undefined) => void;
  mode?: "date" | "time" | "datetime";
  minimumDate?: Date;
  maximumDate?: Date;
}

