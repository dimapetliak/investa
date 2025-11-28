import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const cardStyles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
    gap: Spacing.md,
  } as ViewStyle,
  header: {
    gap: 4,
  } as ViewStyle,
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Spacing.sm,
  } as ViewStyle,
  statItem: {
    gap: 4,
  } as ViewStyle,
});


