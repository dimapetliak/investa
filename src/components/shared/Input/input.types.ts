import type {
    StyleProp,
    TextInputProps,
    TextStyle,
    ViewStyle,
} from "react-native";
  
  export interface InputProps extends TextInputProps {
    label?: string;
    helperText?: string;
    error?: string;
    isDisabled?: boolean;
  
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  
    containerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
  }
  