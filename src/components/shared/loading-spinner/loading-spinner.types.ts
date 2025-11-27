import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface LoadingSpinnerProps extends ViewProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  style?: StyleProp<ViewStyle>;
}

