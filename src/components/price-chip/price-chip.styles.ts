import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, ViewStyle } from "react-native";

export const chipStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    backgroundColor: Colors.neutral100,
    borderRadius: 6,
    alignSelf: "flex-start",
  } as ViewStyle,
});


