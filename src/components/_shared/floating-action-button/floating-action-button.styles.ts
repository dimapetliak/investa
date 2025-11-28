import { Colors } from "@/src/theme/colors";
import { StyleSheet, ViewStyle } from "react-native";

export const fabStyles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  } as ViewStyle,
  disabled: {
    backgroundColor: Colors.neutral300,
    opacity: 0.5,
  } as ViewStyle,
});


