import React from 'react';
import { Input } from '../input/input.component';
import { NumberInputProps } from './number-input.types';

export const NumberInput = ({
  value,
  onChangeValue,
  decimalPlaces = 2,
  ...props
}: NumberInputProps) => {
  const handleChangeText = (text: string) => {
    // Remove all non-numeric characters except decimal point
    const cleaned = text.replace(/[^0-9.]/g, '');
    
    // Ensure only one decimal point
    const parts = cleaned.split('.');
    let formatted = parts[0];
    if (parts.length > 1) {
      formatted += '.' + parts.slice(1).join('').slice(0, decimalPlaces);
    }

    onChangeValue?.(formatted);
  };

  return (
    <Input
      {...props}
      value={value?.toString()}
      onChangeText={handleChangeText}
      keyboardType="decimal-pad"
    />
  );
};

