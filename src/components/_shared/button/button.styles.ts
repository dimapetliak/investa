import { LightColors, Spacing, Radius, ControlHeight, Typography, BorderWidth, Opacity } from "@/theme";
import { StyleSheet } from "react-native";
import { ButtonSize, ButtonVariant } from "./button.types";

export const getButtonStyles = (colors: typeof LightColors) => StyleSheet.create({
  base: {
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.neutral100,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: BorderWidth.thin,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  destructive: {
    backgroundColor: colors.error,
  },
  sm: {
    paddingHorizontal: Spacing.lg,
    height: ControlHeight.sm,
  },
  md: {
    paddingHorizontal: Spacing.xl,
    height: ControlHeight.md,
  },
  lg: {
    paddingHorizontal: Spacing['2xl'],
    height: ControlHeight.lg,
  },
  disabled: {
    opacity: Opacity.disabled,
  },
});

export const getTextColors = (colors: typeof LightColors): Record<ButtonVariant, string> => ({
  primary: colors.primaryForeground,
  secondary: colors.foreground,
  outline: colors.foreground,
  ghost: colors.foreground,
  destructive: colors.white,
});

export const textSizes: Record<ButtonSize, number> = {
  sm: Typography.fontSize.sm,
  md: Typography.fontSize.base,
  lg: Typography.fontSize.lg,
};
