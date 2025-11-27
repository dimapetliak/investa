import { Colors } from "@/src/theme/colors";
import { StyleSheet, ViewStyle } from "react-native";

export const skeletonStyles = StyleSheet.create({
  base: {
    backgroundColor: Colors.neutral200,
    overflow: "hidden",
  } as ViewStyle,
  animated: {
    backgroundColor: Colors.neutral200,
  } as ViewStyle,
});

