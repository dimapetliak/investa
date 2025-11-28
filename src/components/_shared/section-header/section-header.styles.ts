import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  content: {
    flex: 1,
  },
  rightAction: {
    marginLeft: Spacing.md,
  },
});

