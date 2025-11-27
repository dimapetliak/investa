import { Colors } from "@/src/theme/colors";
import { Spacing } from "@/src/theme/spacing";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const selectStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  } as ViewStyle,
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "50%",
    paddingTop: Spacing.md,
  } as ViewStyle,
  option: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
  } as ViewStyle,
  optionPressed: {
    backgroundColor: Colors.neutral50,
  } as ViewStyle,
  optionSelected: {
    backgroundColor: Colors.primaryExtraLight,
  } as ViewStyle,
  optionText: {
    color: Colors.neutral700,
  } as TextStyle,
  optionTextSelected: {
    color: Colors.primary,
    fontWeight: "600",
  } as TextStyle,
});

