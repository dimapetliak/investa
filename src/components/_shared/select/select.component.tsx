import React, { useCallback, useState } from "react";
import { Modal, Pressable, ScrollView, View } from "react-native";
import { Input } from "../Input/input.component";
import { Text } from "../text/text.component";
import { selectStyles } from "./select.styles";
import type { SelectProps } from "./select.types";

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChangeValue,
  placeholder = "Select an option",
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = useCallback(
    (optionValue: string | number) => {
      onChangeValue?.(optionValue);
      setIsOpen(false);
    },
    [onChangeValue]
  );

  return (
    <>
      <Pressable onPress={() => setIsOpen(true)}>
        <Input
          {...rest}
          value={selectedOption?.label || ""}
          placeholder={placeholder}
          editable={false}
          rightIcon={
            // You can add a chevron-down icon here using @expo/vector-icons
            null
          }
        />
      </Pressable>

      <Modal visible={isOpen} transparent animationType="slide">
        <Pressable
          style={selectStyles.modalOverlay}
          onPress={() => setIsOpen(false)}
        >
          <View style={selectStyles.modalContent}>
            <ScrollView>
              {options.map((option) => (
                <Pressable
                  key={String(option.value)}
                  onPress={() => handleSelect(option.value)}
                  style={({ pressed }) => [
                    selectStyles.option,
                    pressed && selectStyles.optionPressed,
                    value === option.value && selectStyles.optionSelected,
                  ]}
                >
                  <Text
                    variant="body"
                    style={
                      value === option.value
                        ? selectStyles.optionTextSelected
                        : selectStyles.optionText
                    }
                  >
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};


