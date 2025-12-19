import { Radius, Spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: Spacing.xs,
  },
  track: {
    height: 8,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: Radius.full,
  },
  percentage: {
    marginTop: Spacing.xs,
  },
});

