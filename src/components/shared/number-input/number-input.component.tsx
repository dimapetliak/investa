import React, { useCallback } from "react";
import { Input } from "../Input/input.component";
import type { NumberInputProps } from "./number-input.types";

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChangeValue,
  min,
  max,
  decimalPlaces = 2,
  onChangeText,
  ...rest
}) => {
  const handleChangeText = useCallback(
    (text: string) => {
      if (text === "" || text === "-") {
        onChangeValue?.(undefined);
        onChangeText?.(text);
        return;
      }

      const numValue = parseFloat(text);
      if (isNaN(numValue)) {
        return;
      }

      let finalValue = numValue;
      if (min !== undefined && finalValue < min) {
        finalValue = min;
      }
      if (max !== undefined && finalValue > max) {
        finalValue = max;
      }

      onChangeValue?.(finalValue);
      onChangeText?.(text);
    },
    [onChangeValue, onChangeText, min, max]
  );

  const displayValue = value !== undefined ? value.toFixed(decimalPlaces) : "";

  return (
    <Input
      {...rest}
      keyboardType="decimal-pad"
      value={displayValue}
      onChangeText={handleChangeText}
    />
  );
};

