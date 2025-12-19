import { Radius, Spacing, Typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  label: {
    marginBottom: 4,
  },
  value: {
    fontFamily: Typography.fontWeight.bold,
    marginBottom: Spacing.xs,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.md,
  },
});

