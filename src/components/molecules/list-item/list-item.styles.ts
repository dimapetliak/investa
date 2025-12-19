import { Spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderBottomWidth: 1,
    minHeight: 64,
  },
  leftIcon: {
    marginRight: Spacing.md,
  },
  content: {
    flex: 1,
  },
  subtitle: {
    marginTop: 4,
  },
  rightIcon: {
    marginLeft: Spacing.md,
  },
});

