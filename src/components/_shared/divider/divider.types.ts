import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface DividerProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  variant?: "solid" | "dashed";
  orientation?: "horizontal" | "vertical";
}


