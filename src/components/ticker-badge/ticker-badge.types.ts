import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface TickerBadgeProps extends ViewProps {
  ticker: string;
  style?: StyleProp<ViewStyle>;
  size?: "sm" | "md" | "lg";
}


