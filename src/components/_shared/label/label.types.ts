import type { StyleProp, TextProps, TextStyle } from "react-native";

export interface LabelProps extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  required?: boolean;
}


