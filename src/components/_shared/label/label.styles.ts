import { Colors } from "@/src/theme/colors";
import { StyleSheet, TextStyle } from "react-native";

export const labelStyles = StyleSheet.create({
  base: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.neutral700,
    marginBottom: 4,
  } as TextStyle,
  required: {
    color: Colors.error,
  } as TextStyle,
});


