import { StyleSheet, ViewStyle } from "react-native";

export const sizeStyles = StyleSheet.create({
  sm: {
    width: 16,
    height: 16,
  } as ViewStyle,
  md: {
    width: 24,
    height: 24,
  } as ViewStyle,
  lg: {
    width: 40,
    height: 40,
  } as ViewStyle,
});

export const containerStyles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});

