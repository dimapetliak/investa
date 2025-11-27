import type { PressableProps, StyleProp, ViewStyle } from "react-native";

export interface IconButtonProps extends Omit<PressableProps, "style"> {
  icon: React.ReactNode;
  onPress?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

