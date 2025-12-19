import { Spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    marginTop: 4,
  },
  action: {
    marginLeft: Spacing.md,
  },
});

