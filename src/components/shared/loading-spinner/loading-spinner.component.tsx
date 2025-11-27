import { Colors } from "@/src/theme/colors";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { containerStyles } from "./loading-spinner.styles";
import type { LoadingSpinnerProps } from "./loading-spinner.types";

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = Colors.primary,
  style,
  ...rest
}) => {
  const sizeValue = size === "sm" ? "small" : size === "lg" ? "large" : "small";

  return (
    <View {...rest} style={[containerStyles.base, style]}>
      <ActivityIndicator size={sizeValue} color={color} />
    </View>
  );
};

