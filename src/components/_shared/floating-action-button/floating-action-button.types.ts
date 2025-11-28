import type { PressableProps, StyleProp, ViewStyle } from "react-native";

export interface FloatingActionButtonProps extends Omit<PressableProps, "style"> {
  icon: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}


