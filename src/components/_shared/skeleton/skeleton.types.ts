import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface SkeletonProps extends ViewProps {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  variant?: "text" | "circular" | "rectangular";
}


