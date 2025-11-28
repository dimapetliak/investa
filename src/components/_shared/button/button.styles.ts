import { Colors } from "@/theme/colors";
import { Spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";
import { ButtonSize, ButtonVariant } from "./button.types";

export const buttonStyles = StyleSheet.create({
  base: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.neutral100,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.neutral300,
  },
  text: {
    backgroundColor: "transparent",
  },
  sm: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    minHeight: 32,
  },
  md: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    minHeight: 44,
  },
  lg: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    minHeight: 52,
  },
  disabled: {
    opacity: 0.5,
  },
});

export const textColors: Record<ButtonVariant, string> = {
  primary: Colors.white,
  secondary: Colors.black,
  outline: Colors.black,
  text: Colors.primary,
};

export const textSizes: Record<ButtonSize, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};
