import type { StyleProp, TextProps, TextStyle } from "react-native";

export interface HelperTextProps extends TextProps {
  text?: string;
  style?: StyleProp<TextStyle>;
}

