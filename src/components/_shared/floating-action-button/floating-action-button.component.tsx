import React from "react";
import { Pressable, View } from "react-native";
import { fabStyles } from "./floating-action-button.styles";
import type { FloatingActionButtonProps } from "./floating-action-button.types";

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onPress,
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
        fabStyles.container,
        disabled && fabStyles.disabled,
        pressed && !disabled && { opacity: 0.8 },
        style,
      ]}
    >
      <View>{icon}</View>
    </Pressable>
  );
};


