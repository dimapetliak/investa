import { Colors } from "@/src/theme/colors";
import { StyleSheet, ViewStyle } from "react-native";

export const dividerStyles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.neutral200,
  } as ViewStyle,
  vertical: {
    width: 1,
    height: "100%",
    backgroundColor: Colors.neutral200,
  } as ViewStyle,
});


