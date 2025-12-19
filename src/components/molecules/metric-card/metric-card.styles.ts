import { Radius, Spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.md,
    borderWidth: 1,
    padding: Spacing.md,
    minWidth: 140,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  iconContainer: {
    marginRight: Spacing.xs,
  },
  value: {
    marginBottom: Spacing.xs,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.xs,
    paddingVertical: 2,
    borderRadius: Radius.full,
  },
});

