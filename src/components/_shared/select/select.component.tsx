import { useTheme } from '@/contexts/theme-context';
import { Spacing, Typography, Opacity } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, View } from 'react-native';
import { Text } from '../text/text.component';
import { getSelectStyles } from './select.styles';
import { SelectProps } from './select.types';

export const Select = ({
  label,
  error,
  hint,
  placeholder = 'Select an option',
  options,
  value,
  onChangeValue,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme();
  const styles = getSelectStyles(colors);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption?.label || placeholder;
  const isPlaceholder = !selectedOption;

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true);
      setIsFocused(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsFocused(false);
  };

  const handleSelect = (optionValue: string | number) => {
    onChangeValue?.(optionValue);
    handleClose();
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text
          variant="caption"
          color="muted"
          style={{ marginBottom: Spacing.xs }}
        >
          {label}
        </Text>
      )}

      <Pressable
        onPress={handleOpen}
        disabled={disabled}
        style={({ pressed }) => [
          styles.selectButton,
          isFocused && styles.selectButtonFocused,
          error && styles.selectButtonError,
          disabled && styles.selectButtonDisabled,
          pressed && !disabled && { opacity: Opacity.hover },
          style,
        ]}
      >
        {leftIcon && <View style={{ marginRight: Spacing.sm }}>{leftIcon}</View>}

        <Text
          variant="body"
          color={isPlaceholder ? 'muted' : 'default'}
          style={styles.selectButtonText}
        >
          {displayText}
        </Text>

        <View style={styles.iconContainer}>
          {rightIcon || (
            <Ionicons
              name="chevron-down"
              size={20}
              color={disabled ? colors.foregroundMuted : colors.foreground}
            />
          )}
        </View>
      </Pressable>

      {hint && !error && (
        <Text variant="caption" color="muted" style={{ marginTop: Spacing.xs }}>
          {hint}
        </Text>
      )}

      {error && (
        <Text
          variant="caption"
          color="error"
          style={{ marginTop: Spacing.xs }}
        >
          {error}
        </Text>
      )}

      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={handleClose}
      >
        <Pressable style={styles.modalOverlay} onPress={handleClose}>
          <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalHeader}>
              <Text variant="h3">{label || 'Select an option'}</Text>
              <Pressable onPress={handleClose}>
                <Ionicons name="close" size={24} color={colors.foregroundMuted} />
              </Pressable>
            </View>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: Spacing.md }}
              showsVerticalScrollIndicator={false}
            >
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <Pressable
                    key={String(option.value)}
                    onPress={() => handleSelect(option.value)}
                    style={({ pressed }) => [
                      styles.optionItem,
                      isSelected && styles.optionItemSelected,
                      pressed && { opacity: Opacity.muted },
                    ]}
                  >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Text
                        variant="body"
                        color={isSelected ? 'primary' : 'default'}
                        style={isSelected ? { fontFamily: Typography.fontWeight.semiBold } : undefined}
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
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

