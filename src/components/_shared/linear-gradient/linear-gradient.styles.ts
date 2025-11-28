import { Colors } from '@/src/theme/colors';

export const gradientVariants = {
  primary: {
    colors: [Colors.primaryGradientStart, Colors.primaryGradientEnd],
    start: [0, 0] as [number, number],
    end: [1, 1] as [number, number],
  },
  success: {
    colors: [Colors.success, '#4ADE80'],
    start: [0, 0] as [number, number],
    end: [1, 1] as [number, number],
  },
  purple: {
    colors: [Colors.accentPurple, '#7C3AED'],
    start: [0, 0] as [number, number],
    end: [1, 1] as [number, number],
  },
  blue: {
    colors: [Colors.primary, '#3B82F6'],
    start: [0, 0] as [number, number],
    end: [1, 1] as [number, number],
  },
  custom: {
    colors: [],
    start: [0, 0] as [number, number],
    end: [1, 1] as [number, number],
  },
};


