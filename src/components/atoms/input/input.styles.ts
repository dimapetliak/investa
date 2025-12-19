import { ControlHeight, Radius, Spacing, Typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  label: {
    marginBottom: Spacing.xs,
  },
  inputWrapper: {
    height: ControlHeight.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.sm,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
  },
  input: {
    flex: 1,
    fontSize: Typography.fontSize.base,
    lineHeight: Typography.lineHeight.base,
  },
  inputWithLeftElement: {
    marginLeft: Spacing.xs,
  },
  inputWithRightElement: {
    marginRight: Spacing.xs,
  },
  leftElement: {
    marginRight: 0,
  },
  rightElement: {
    marginLeft: 0,
  },
  hint: {
    marginTop: Spacing.xs,
  },
  error: {
    marginTop: Spacing.xs,
  },
});

