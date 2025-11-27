import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface CardProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
}

