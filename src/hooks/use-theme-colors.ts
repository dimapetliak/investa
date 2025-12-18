import { useTheme } from '@/contexts/theme-context';

/**
 * Hook to easily access theme colors in components
 * @returns The current theme's color palette
 */
export const useThemeColors = () => {
  const { colors } = useTheme();
  return colors;
};
