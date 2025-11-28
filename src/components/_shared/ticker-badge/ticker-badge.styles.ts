import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  badge: {
    backgroundColor: Colors.primaryExtraLight,
    borderRadius: 6,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    alignSelf: 'flex-start',
  },
  sm: {
    paddingHorizontal: Spacing.xs,
    paddingVertical: 2,
  },
  md: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  lg: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  ticker: {
    color: Colors.primary,
  },
});

