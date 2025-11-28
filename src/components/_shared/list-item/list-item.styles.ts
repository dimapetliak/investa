import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const listItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
  } as ViewStyle,
  content: {
    flex: 1,
    marginLeft: Spacing.md,
  } as ViewStyle,
  rightContent: {
    marginLeft: Spacing.sm,
  } as ViewStyle,
});

