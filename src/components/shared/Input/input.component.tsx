import { Colors } from "@/src/theme/colors";
import React, { useCallback, useState } from "react";
import { TextInput, View } from "react-native";
import { Text } from '../text/text.component';
import {
    ERROR_COLOR,
    iconWrapperStyle,
    inputContainerBaseStyle,
    textInputBaseStyle,
} from "./input.styles";
import type { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  isDisabled,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  editable,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const hasError = !!error;

  const handleFocus: InputProps["onFocus"] = useCallback(
    (e: any) => {
      setFocused(true);
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur: InputProps["onBlur"] = useCallback(
    (e: any) => {
      setFocused(false);
      onBlur?.(e);
    },
    [onBlur]
  );

  const resolveEditable = editable ?? !isDisabled;

  const borderColor = (() => {
    if (hasError) return ERROR_COLOR;
    if (focused) return Colors.primary;
    return Colors.neutral200;
  })();

  const backgroundColor = isDisabled ? Colors.neutral100 : Colors.white;

  return (
    <View style={containerStyle}>
      {label ? (
        <Text
          variant="bodySmall"
          tone="muted"
          style={{ marginBottom: 4 }}
        >
          {label}
        </Text>
      ) : null}

      <View
        style={[
          inputContainerBaseStyle,
          {
            borderColor,
            backgroundColor,
            opacity: isDisabled ? 0.7 : 1,
          },
        ]}
      >
        {leftIcon && <View style={iconWrapperStyle}>{leftIcon}</View>}

        <TextInput
          {...rest}
          editable={resolveEditable}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={Colors.neutral400}
          style={[
            textInputBaseStyle,
            inputStyle,
            leftIcon && { paddingLeft: 0 },
            rightIcon && { paddingRight: 0 },
          ]}
        />

        {rightIcon && <View style={iconWrapperStyle}>{rightIcon}</View>}
      </View>

      {hasError ? (
        <Text
          variant="bodySmall"
          tone="default"
          style={{ marginTop: 4, color: ERROR_COLOR }}
        >
          {error}
        </Text>
      ) : helperText ? (
        <Text
          variant="bodySmall"
          tone="muted"
          style={{ marginTop: 4 }}
        >
          {helperText}
        </Text>
      ) : null}
    </View>
  );
};
