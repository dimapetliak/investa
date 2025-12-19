import { useTheme } from '@/contexts/theme-context';

export const useThemeSettings = () => {
  const { theme, setTheme, colors, colorScheme } = useTheme();
  const isDarkMode = colorScheme === 'dark';

  const darkModeLabel = theme === 'system'
    ? `System (${isDarkMode ? 'Dark' : 'Light'})`
    : theme === 'dark'
    ? 'Always dark'
    : 'Always light';

  const isDarkModeEnabled = theme === 'dark' || (theme === 'system' && isDarkMode);

  const handleDarkModeToggle = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const handleThemeChange = (value: string | number) => {
    setTheme(value as 'light' | 'dark' | 'system');
  };

  return {
    theme,
    colors,
    isDarkMode,
    darkModeLabel,
    isDarkModeEnabled,
    handleDarkModeToggle,
    handleThemeChange,
  };
};

