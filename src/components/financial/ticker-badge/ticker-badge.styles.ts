import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const badgeStyles = StyleSheet.create({
  base: {
    backgroundColor: Colors.primaryExtraLight,
    borderRadius: 6,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    alignSelf: "flex-start",
  } as ViewStyle,
  sm: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  } as ViewStyle,
  md: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  } as ViewStyle,
  lg: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
  } as ViewStyle,
});

export const textStyles = StyleSheet.create({
  sm: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.primary,
    letterSpacing: 0.5,
  } as TextStyle,
  md: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.primary,
    letterSpacing: 0.5,
  } as TextStyle,
  lg: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.primary,
    letterSpacing: 0.5,
  } as TextStyle,
});

