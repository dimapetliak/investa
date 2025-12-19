import { Radius, Typography } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontWeight.semiBold,
    lineHeight: Typography.lineHeight.base,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
});

