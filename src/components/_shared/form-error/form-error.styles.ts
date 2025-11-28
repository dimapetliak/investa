import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle } from "react-native";

export const errorStyles = StyleSheet.create({
  base: {
    fontSize: 13,
    color: Colors.error,
    marginTop: Spacing.xs,
  } as TextStyle,
});


