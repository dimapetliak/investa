import { Colors } from '@/theme/colors';
import { Fonts } from '@/theme/fonts';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './select.styles';
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
          pressed && !disabled && { opacity: 0.8 },
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
              color={disabled ? Colors.neutral400 : Colors.neutral500}
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
          <Pressable
            style={styles.modalContent}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.modalHeader}>
              <Text variant="h3">
                {label || 'Select an option'}
              </Text>
              <Pressable onPress={handleClose}>
                <Ionicons name="close" size={24} color={Colors.neutral500} />
              </Pressable>
            </View>

            <ScrollView>
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <Pressable
                    key={String(option.value)}
                    onPress={() => handleSelect(option.value)}
                    style={({ pressed }) => [
                      styles.optionItem,
                      isSelected && styles.optionItemSelected,
                      pressed && { opacity: 0.7 },
                    ]}
                  >
                    <Text
                      variant="body"
                      color={isSelected ? 'primary' : 'default'}
                      style={isSelected ? { fontFamily: Fonts.semiBold } : undefined}
                    >
                      {option.label}
                    </Text>
                    {isSelected && (
                      <Ionicons
                        name="checkmark"
                        size={20}
                        color={Colors.primary}
                        style={{ position: 'absolute', right: Spacing.md, top: Spacing.md }}
                      />
                    )}
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

