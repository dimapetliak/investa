import { LightColors, Spacing, Radius, ControlHeight, Typography, BorderWidth, Opacity } from '@/theme';
import { StyleSheet } from 'react-native';

export const getSelectStyles = (colors: typeof LightColors) => StyleSheet.create({
  container: {
    marginBottom: Spacing.lg,
  },
  selectButton: {
    borderWidth: BorderWidth.thin,
    borderColor: colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: ControlHeight.md,
  },
  selectButtonFocused: {
    borderColor: colors.primary,
    borderWidth: BorderWidth.medium,
  },
  selectButtonError: {
    borderColor: colors.error,
  },
  selectButtonDisabled: {
    backgroundColor: colors.backgroundSecondary,
    opacity: Opacity.disabled,
  },
  selectButtonText: {
    flex: 1,
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontWeight.regular,
    color: colors.foreground,
  },
  iconContainer: {
    marginLeft: Spacing.sm,
  },
  optionItem: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: BorderWidth.thin,
    borderBottomColor: colors.border,
  },
  optionItemSelected: {
    backgroundColor: colors.primaryLight,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    maxHeight: '80%',
    paddingTop: Spacing.lg,
  },
  modalHeader: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
    borderBottomWidth: BorderWidth.thin,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

