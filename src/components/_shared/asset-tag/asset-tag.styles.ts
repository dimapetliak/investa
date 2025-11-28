import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tag: {
    borderRadius: 4,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  stock: {
    backgroundColor: Colors.primaryExtraLight,
  },
  crypto: {
    backgroundColor: Colors.info,
  },
  tagText: {
    fontSize: 10,
    color: Colors.neutral700,
  },
});

