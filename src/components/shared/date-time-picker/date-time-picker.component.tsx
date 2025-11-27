import React, { useCallback, useState } from "react";
import { Platform, Pressable } from "react-native";
import { Input } from "../Input/input.component";
import type { DateTimePickerProps } from "./date-time-picker.types";

const formatDate = (date: Date, mode: "date" | "time" | "datetime"): string => {
  if (mode === "date") {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  if (mode === "time") {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChangeValue,
  mode = "date",
  minimumDate,
  maximumDate,
  editable = true,
  ...rest
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const displayValue = value ? formatDate(value, mode) : "";

  const handlePress = useCallback(() => {
    if (Platform.OS === "ios") {
      // For iOS, you would typically use a modal with a native picker
      // This is a simplified version - in production, use @react-native-community/datetimepicker
      setShowPicker(true);
    } else {
      // For Android, the native picker opens automatically
      setShowPicker(true);
    }
  }, []);

  // Note: This is a basic implementation. In production, you should use
  // @react-native-community/datetimepicker for native date/time picking
  return (
    <Pressable onPress={handlePress} disabled={!editable}>
      <Input
        {...rest}
        value={displayValue}
        editable={false}
        rightIcon={
          // You can add a calendar icon here using @expo/vector-icons
          null
        }
      />
    </Pressable>
  );
};

