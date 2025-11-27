import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const cardStyles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    gap: Spacing.sm,
  } as ViewStyle,
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  } as ViewStyle,
  content: {
    gap: Spacing.xs,
  } as ViewStyle,
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: Spacing.xs,
  } as ViewStyle,
});

