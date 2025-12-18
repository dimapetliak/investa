import { LightColors, Spacing, Radius, Typography, BorderWidth } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderRadius: Radius.md,
    borderWidth: BorderWidth.thin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sm: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
  },
  md: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  text: {
    fontFamily: Typography.fontWeight.medium,
  },
  smText: {
    fontSize: Typography.fontSize.xs,
    lineHeight: Typography.lineHeight.xs,
  },
  mdText: {
    fontSize: Typography.fontSize.sm,
    lineHeight: Typography.lineHeight.sm,
  },
});

export const getVariantStyles = (colors: typeof LightColors) => StyleSheet.create({
  default: {
    backgroundColor: colors.backgroundSecondary,
    borderColor: colors.border,
  },
  defaultText: {
    color: colors.foreground,
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  primaryText: {
    color: colors.primaryForeground,
  },
  secondary: {
    backgroundColor: colors.neutral100,
    borderColor: colors.border,
  },
  secondaryText: {
    color: colors.foreground,
  },
  success: {
    backgroundColor: colors.successLight,
    borderColor: colors.success,
  },
  successText: {
    color: colors.successForeground,
  },
  error: {
    backgroundColor: colors.errorLight,
    borderColor: colors.error,
  },
  errorText: {
    color: colors.errorForeground,
  },
  warning: {
    backgroundColor: colors.warningLight,
    borderColor: colors.warning,
  },
  warningText: {
    color: colors.warningForeground,
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  outlineText: {
    color: colors.foreground,
  },
});
