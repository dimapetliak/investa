import { Colors } from "@/src/theme/colors";
import { StyleSheet, ViewStyle } from "react-native";

export const sizeStyles = StyleSheet.create({
  sm: {
    width: 32,
    height: 32,
    borderRadius: 16,
  } as ViewStyle,
  md: {
    width: 40,
    height: 40,
    borderRadius: 20,
  } as ViewStyle,
  lg: {
    width: 48,
    height: 48,
    borderRadius: 24,
  } as ViewStyle,
});

export const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: Colors.primary,
  } as ViewStyle,
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary,
  } as ViewStyle,
  ghost: {
    backgroundColor: "transparent",
  } as ViewStyle,
});

export const disabledStyles = StyleSheet.create({
  default: {
    backgroundColor: Colors.neutral300,
    opacity: 0.5,
  } as ViewStyle,
  outline: {
    borderColor: Colors.neutral300,
    opacity: 0.5,
  } as ViewStyle,
  ghost: {
    opacity: 0.5,
  } as ViewStyle,
});

export const baseStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});

