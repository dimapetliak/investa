import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const emptyStateStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.xl,
    gap: Spacing.md,
  } as ViewStyle,
  content: {
    alignItems: "center",
    gap: Spacing.sm,
  } as ViewStyle,
});

