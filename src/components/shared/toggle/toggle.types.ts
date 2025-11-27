import type { PressableProps, StyleProp, ViewStyle } from "react-native";

export interface ToggleProps extends Omit<PressableProps, "style"> {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  size?: "sm" | "md";
}

