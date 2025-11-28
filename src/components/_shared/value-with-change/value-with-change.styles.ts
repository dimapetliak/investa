import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: Spacing.sm,
  },
  value: {
    marginRight: Spacing.xs,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  change: {
    fontSize: 12,
  },
});

