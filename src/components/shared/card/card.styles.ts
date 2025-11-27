import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const cardStyles = StyleSheet.create({
  base: {
    backgroundColor: Colors.white,
    borderRadius: 12,
  } as ViewStyle,
  default: {
    backgroundColor: Colors.white,
  } as ViewStyle,
  elevated: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  } as ViewStyle,
  outlined: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.neutral200,
  } as ViewStyle,
});

export const paddingStyles = StyleSheet.create({
  none: {
    padding: 0,
  } as ViewStyle,
  sm: {
    padding: Spacing.sm,
  } as ViewStyle,
  md: {
    padding: Spacing.md,
  } as ViewStyle,
  lg: {
    padding: Spacing.lg,
  } as ViewStyle,
});

