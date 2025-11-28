import { Colors } from '@/theme/colors';
import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.neutral100,
    borderRadius: 10,
    padding: 2,
  },
  segment: {
    flex: 1,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentFirst: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  segmentLast: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  segmentSelected: {
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  segmentText: {
    color: Colors.neutral600,
  },
});

