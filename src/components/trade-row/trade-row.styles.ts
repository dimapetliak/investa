import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const rowStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
  } as ViewStyle,
  leftSection: {
    flex: 1,
    gap: 4,
  } as ViewStyle,
  rightSection: {
    alignItems: "flex-end",
    gap: 4,
  } as ViewStyle,
  typeBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
  } as ViewStyle,
  buy: {
    backgroundColor: Colors.success + "30",
  } as ViewStyle,
  sell: {
    backgroundColor: Colors.error + "30",
  } as ViewStyle,
  typeText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
  } as TextStyle,
  buyText: {
    color: Colors.success,
  } as TextStyle,
  sellText: {
    color: Colors.error,
  } as TextStyle,
});


