import React from "react";
import {
    Pressable,
    View
} from "react-native";
import { Text } from '../text/text.component';
import { baseStyles, labelDisabledStyles, labelStyles, pressedStyles, sizeLabelStyles, sizeStyles, variantDisabledStyles, variantStyles } from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({
	variant = "primary",
	size = "md",
	isLoading,
	fullWidth = false,
	leftIcon,
	rightIcon,
	children,
	style,
	contentStyle,
	textStyle,
	...pressableProps
}: ButtonProps) => {
	const disabled = isLoading || pressableProps.disabled;

	const buttonStyle = [
		baseStyles.container,
		variantStyles[variant],
		sizeStyles[size],
		disabled && variantDisabledStyles[variant],
		fullWidth && { alignSelf: "stretch" as const },
	];

	const labelStyle = [
		baseStyles.label,
		labelStyles[variant],
		sizeLabelStyles[size],
		disabled && labelDisabledStyles[variant],
		textStyle,
	];

	return (
		<Pressable
			{...pressableProps}
			disabled={disabled}
			style={({ pressed }) => [
				pressed && pressedStyles[variant],
				buttonStyle,
				style,
			]}
		>
			<View
				style={[
					{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 8,
					},
					contentStyle,
				]}
			>
				{leftIcon && <View>{leftIcon}</View>}
				{typeof children === "string" ? (
					<Text
						style={labelStyle}
					>
						{children}
					</Text>
				) : (
					children
				)}
				{rightIcon && <View>{rightIcon}</View>}
			</View>
		</Pressable>
	);
};
