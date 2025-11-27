import { Colors } from "@/src/theme/colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const containerStyles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  } as ViewStyle,
});

export const valueStyles = StyleSheet.create({
  sm: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.neutral700,
  } as TextStyle,
  md: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.neutral700,
  } as TextStyle,
  lg: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.neutral700,
  } as TextStyle,
});

export const changeStyles = StyleSheet.create({
  sm: {
    fontSize: 12,
    fontWeight: "500",
  } as TextStyle,
  md: {
    fontSize: 14,
    fontWeight: "500",
  } as TextStyle,
  lg: {
    fontSize: 16,
    fontWeight: "500",
  } as TextStyle,
  positive: {
    color: Colors.success,
  } as TextStyle,
  negative: {
    color: Colors.error,
  } as TextStyle,
  neutral: {
    color: Colors.neutral500,
  } as TextStyle,
});

