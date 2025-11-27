import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const rowStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spacing.sm,
  } as ViewStyle,
  label: {
    flex: 1,
  } as ViewStyle,
  value: {
    flex: 1,
    alignItems: "flex-end",
  } as ViewStyle,
});

