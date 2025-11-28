import { Colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';
import { Input } from '../input/input.component';
import { DateTimePickerProps } from './date-time-picker.types';


// Note: This is a placeholder. Install @react-native-community/datetimepicker for full functionality
// For now, it displays the date but picker functionality needs to be implemented
export const DateTimePicker = ({
  label,
  value,
  onChangeValue,
  mode = 'date',
  error,
  hint,
  disabled = false,
  ...props
}: DateTimePickerProps) => {
  const formatDate = (date: Date | undefined): string => {
    if (!date) return '';
    
    if (mode === 'date') {
      return date.toLocaleDateString();
    } else if (mode === 'time') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleString();
    }
  };

  const handlePress = () => {
    if (!disabled && onChangeValue) {
      // TODO: Implement date picker modal using @react-native-community/datetimepicker
      // For now, this is a placeholder
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <Input
        {...props}
        label={label}
        value={formatDate(value)}
        editable={false}
        error={error}
        hint={hint}
        rightIcon={
          <Ionicons
            name={mode === 'time' ? 'time-outline' : 'calendar-outline'}
            size={20}
            color={Colors.neutral500}
          />
        }
      />
    </Pressable>
  );
};

