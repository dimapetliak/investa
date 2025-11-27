import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const containerStyles = StyleSheet.create({
  base: {
    flexDirection: "row",
    backgroundColor: Colors.neutral100,
    borderRadius: 8,
    padding: 2,
  } as ViewStyle,
});

export const segmentStyles = StyleSheet.create({
  base: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  active: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  } as ViewStyle,
});

export const textStyles = StyleSheet.create({
  base: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.neutral600,
  } as TextStyle,
  active: {
    color: Colors.primary,
    fontWeight: "600",
  } as TextStyle,
});

