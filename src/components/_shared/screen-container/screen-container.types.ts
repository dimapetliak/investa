import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface ScreenContainerProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safeArea?: boolean;
}


