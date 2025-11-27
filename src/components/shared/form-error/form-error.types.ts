import type { StyleProp, TextProps, TextStyle } from "react-native";

export interface FormErrorProps extends TextProps {
  message?: string;
  style?: StyleProp<TextStyle>;
}

