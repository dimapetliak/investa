import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  message: {
    marginTop: Spacing.md,
    textAlign: 'center',
  },
});

