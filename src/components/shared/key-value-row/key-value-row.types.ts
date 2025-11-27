import type { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface KeyValueRowProps extends ViewProps {
  label: string;
  value: string | number | React.ReactNode;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  valueStyle?: StyleProp<ViewStyle>;
}

