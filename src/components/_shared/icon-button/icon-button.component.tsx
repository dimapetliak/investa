import React from "react";
import { Pressable, View } from "react-native";
import { baseStyles, disabledStyles, sizeStyles, variantStyles } from "./icon-button.styles";
import type { IconButtonProps } from "./icon-button.types";

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = "md",
  variant = "default",
  style,
  disabled,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        baseStyles.container,
        sizeStyles[size],
        variantStyles[variant],
        disabled && disabledStyles[variant],
        pressed && !disabled && { opacity: 0.7 },
        style,
      ]}
    >
      <View>{icon}</View>
    </Pressable>
  );
};


