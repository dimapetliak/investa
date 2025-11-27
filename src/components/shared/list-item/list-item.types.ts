import type { PressableProps, StyleProp, ViewStyle } from "react-native";

export interface ListItemProps extends Omit<PressableProps, "style"> {
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

