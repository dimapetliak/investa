import React from "react";
import { Pressable, View } from "react-native";
import { thumbStyles, trackStyles } from "./toggle.styles";
import type { ToggleProps } from "./toggle.types";

export const Toggle: React.FC<ToggleProps> = ({
  value,
  onValueChange,
  style,
  disabled,
  size = "md",
  ...rest
}) => {
  const handlePress = () => {
    if (!disabled && onValueChange) {
      onValueChange(!value);
    }
  };

  return (
    <Pressable
      {...rest}
      onPress={handlePress}
      disabled={disabled}
      style={style}
    >
      <View
        style={[
          trackStyles[size],
          value && trackStyles.active,
          disabled && trackStyles.disabled,
        ]}
      >
        <View
          style={[
            thumbStyles[size],
            value && (size === "sm" ? thumbStyles.active : thumbStyles.activeMd),
          ]}
        />
      </View>
    </Pressable>
  );
};

