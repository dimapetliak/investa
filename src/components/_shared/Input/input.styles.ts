import { LightColors, Spacing, Radius, ControlHeight, Typography, BorderWidth } from "@/theme";
import { StyleSheet } from "react-native";

export const getInputStyles = (colors: typeof LightColors) => StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.md,
    backgroundColor: colors.background,
    height: ControlHeight.md,
    borderWidth: BorderWidth.thin,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontWeight.regular,
    color: colors.foreground,
    backgroundColor: 'transparent',
  },
  inputWithLeftIcon: {
    paddingLeft: Spacing.sm,
  },
  inputWithRightIcon: {
    paddingRight: Spacing.sm,
  },
  leftIconContainer: {
    paddingLeft: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    paddingRight: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: BorderWidth.medium,
  },
  inputError: {
    borderColor: colors.error,
  },
  hint: {
    fontSize: Typography.fontSize.xs,
    fontFamily: Typography.fontWeight.regular,
    color: colors.foregroundMuted,
  },
});
