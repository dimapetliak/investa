import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle } from "react-native";

export const helperStyles = StyleSheet.create({
  base: {
    fontSize: 13,
    color: Colors.neutral500,
    marginTop: Spacing.xs,
  } as TextStyle,
});

