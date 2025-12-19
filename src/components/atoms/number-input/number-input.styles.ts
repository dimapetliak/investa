import { Radius, Spacing, Typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.sm,
  },
  label: {
    marginBottom: Spacing.xs,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.sm,
    borderWidth: 1,
    paddingHorizontal: Spacing.md,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: Typography.fontSize.base,
    paddingVertical: Spacing.sm,
  },
  prefix: {
    marginRight: Spacing.xs,
  },
  suffix: {
    marginLeft: Spacing.xs,
  },
  hint: {
    marginTop: Spacing.xs,
  },
  error: {
    marginTop: Spacing.xs,
  },
});


