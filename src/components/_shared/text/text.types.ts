import type {
    TextProps as RNTextProps,
    StyleProp,
    TextStyle,
} from "react-native";
  
  export type TextVariant =
    | "h1"
    | "h2"
    | "h3"
    | "subtitle"
    | "body"
    | "bodySmall"
    | "caption";
  
  export type TextTone = "default" | "muted" | "inverse" | "success";
  
  export interface TextProps extends RNTextProps {
    variant?: TextVariant;
    tone?: TextTone;
    align?: "left" | "center" | "right";
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
  }
  