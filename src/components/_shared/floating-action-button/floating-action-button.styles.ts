import { Colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    bottom: -24,
    position: 'absolute',
    right: 24,
    backgroundColor: Colors.primary,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  sm: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  md: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  lg: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  disabled: {
    opacity: 0.5,
  },
});

