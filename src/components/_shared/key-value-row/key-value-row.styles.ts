import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.xs,
  },
  value: {
    flex: 1,
    textAlign: 'right',
  },
  valueRight: {
    textAlign: 'right',
  },
});

