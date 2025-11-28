import { ReactNode } from "react";
import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<PressableProps, "style"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	isLoading?: boolean;
	fullWidth?: boolean;
	children?: ReactNode;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	style?: StyleProp<ViewStyle>;   
	contentStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}