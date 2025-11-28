import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface ValueWithChangeProps extends ViewProps {
  value: number | string;
  change?: number;
  changePercent?: number;
  style?: StyleProp<ViewStyle>;
  showPositiveSign?: boolean;
  size?: "sm" | "md" | "lg";
}


