import { useTheme } from '@/contexts/theme-context';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Text } from '../text';
import { styles } from './date-time-picker.styles';
import type { DateTimePickerProps } from './date-time-picker.types';

export const DateTimePickerInput: React.FC<DateTimePickerProps> = ({
  label,
  value,
  onChangeValue,
  mode = 'date',
  error,
}) => {
  const { colors } = useTheme();
  const currentDate = value || new Date();

  const formatDate = (date: Date) => {
    if (mode === 'date') {
      return date.toLocaleDateString();
    } else if (mode === 'time') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  const handleTextChange = (text: string) => {
    // Try to parse the date from user input
    const parsed = new Date(text);
    if (!isNaN(parsed.getTime())) {
      onChangeValue(parsed);
    }
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="caption" color="muted" style={styles.label}>
          {label}
        </Text>
      )}

      <Pressable
        style={[
          styles.inputWrapper,
          {
            backgroundColor: colors.backgroundSecondary,
            borderColor: error ? colors.error : colors.border,
          },
        ]}
      >
        <TextInput
          style={{ flex: 1, color: colors.foreground }}
          value={formatDate(currentDate)}
          onChangeText={handleTextChange}
          placeholder="Select date..."
          placeholderTextColor={colors.foregroundMuted}
        />
        <Ionicons name="calendar-outline" size={20} color={colors.foregroundMuted} />
      </Pressable>

      {error && (
        <Text variant="small" color="error" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

