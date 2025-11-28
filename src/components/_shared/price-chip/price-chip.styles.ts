import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  price: {
    marginRight: Spacing.xs,
  },
  change: {
    fontSize: 12,
  },
  timestamp: {
    fontSize: 10,
    marginLeft: 'auto',
  },
});

