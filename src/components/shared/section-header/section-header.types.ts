import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface SectionHeaderProps extends ViewProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

