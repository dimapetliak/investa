import { useTheme } from '@/contexts/theme-context';
import { ControlHeight, Radius, Typography } from '@/theme/tokens';
import { Spacing } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from './Text';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | number;
  onChangeValue: (value: string | number) => void;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChangeValue,
  error,
  hint,
  leftIcon,
  disabled,
}) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const handleSelect = (optionValue: string | number) => {
    onChangeValue(optionValue);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text variant="caption" color="muted" style={styles.label}>
          {label}
        </Text>
      )}

      <Pressable
        onPress={() => !disabled && setIsOpen(true)}
        style={({ pressed }) => [
          styles.selectButton,
          {
            backgroundColor: colors.background,
            borderColor: error ? colors.error : colors.border,
            opacity: disabled ? 0.5 : pressed ? 0.7 : 1,
          },
        ]}
        disabled={disabled}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <Text
          variant="body"
          color={selectedOption ? 'default' : 'muted'}
          style={styles.selectText}
        >
          {displayText}
        </Text>
        <Ionicons
          name="chevron-down"
          size={20}
          color={colors.foregroundMuted}
        />
      </Pressable>

      {hint && !error && (
        <Text variant="small" color="muted" style={styles.hint}>
          {hint}
        </Text>
      )}

      {error && (
        <Text variant="small" color="error" style={styles.error}>
          {error}
        </Text>
      )}

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: colors.background },
            ]}
            onStartShouldSetResponder={() => true}
          >
            <View style={styles.modalHeader}>
              <Text variant="h3">{label || 'Select an option'}</Text>
              <Pressable onPress={() => setIsOpen(false)}>
                <Ionicons name="close" size={24} color={colors.foreground} />
              </Pressable>
            </View>

            <ScrollView style={styles.optionsList}>
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <Pressable
                    key={option.value}
                    onPress={() => handleSelect(option.value)}
                    style={({ pressed }) => [
                      styles.option,
                      {
                        backgroundColor: isSelected
                          ? colors.backgroundMuted
                          : pressed
                          ? colors.backgroundMuted
                          : 'transparent',
                      },
                    ]}
                  >
                    <Text
                      variant="body"
                      weight={isSelected ? 'semibold' : 'regular'}
                      color={isSelected ? 'primary' : 'default'}
                    >
                      {option.label}
                    </Text>
                    {isSelected && (
                      <Ionicons
                        name="checkmark"
                        size={20}
                        color={colors.primary}
                      />
                    )}
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    marginBottom: Spacing.xs,
  },
  selectButton: {
    height: ControlHeight.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.md,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
  },
  leftIcon: {
    marginRight: Spacing.sm,
  },
  selectText: {
    flex: 1,
    fontSize: Typography.fontSize.base,
  },
  hint: {
    marginTop: Spacing.xs,
  },
  error: {
    marginTop: Spacing.xs,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  modalContent: {
    width: '100%',
    maxHeight: '80%',
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E7',
  },
  optionsList: {
    maxHeight: 400,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E710',
  },
});
