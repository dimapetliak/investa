import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const tagStyles = StyleSheet.create({
  base: {
    borderRadius: 4,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    alignSelf: "flex-start",
  } as ViewStyle,
  stock: {
    backgroundColor: Colors.primaryExtraLight,
  } as ViewStyle,
  crypto: {
    backgroundColor: Colors.accentPurple + "20",
  } as ViewStyle,
});

export const textStyles = StyleSheet.create({
  stock: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.primary,
    textTransform: "uppercase",
  } as TextStyle,
  crypto: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.accentPurple,
    textTransform: "uppercase",
  } as TextStyle,
});

