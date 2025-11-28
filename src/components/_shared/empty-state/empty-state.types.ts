import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface EmptyStateProps extends ViewProps {
  title: string;
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}


