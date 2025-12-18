import { Fonts } from '@/theme/fonts';
import { Spacing } from '@/theme/spacing';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  filterButton: {
    marginRight: 0,
  },
  filterButtonFont: {
    fontFamily: Fonts.regular,
  }
});

