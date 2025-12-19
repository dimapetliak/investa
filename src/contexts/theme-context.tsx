import { storageHelpers } from '@/lib/storage';
import { DarkColors, GradientColorSet, GradientColors, LightColors } from '@/theme/colors';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'light' | 'dark' | 'system';
type ColorScheme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  colors: typeof LightColors;
  gradients: GradientColorSet;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'app-theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme() || 'light';
  const [theme, setThemeState] = useState<Theme>('system');

  // Load saved theme preference on mount
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = storageHelpers.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
        setThemeState(savedTheme);
      }
    };
    loadTheme();
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    storageHelpers.setItem(THEME_STORAGE_KEY, newTheme);
  };

  // Determine the active color scheme
  const colorScheme: ColorScheme = theme === 'system' ? systemColorScheme : theme;

  // Select colors and gradients based on active scheme
  const colors = colorScheme === 'dark' ? DarkColors : LightColors;
  const gradients = colorScheme === 'dark' ? GradientColors.dark : GradientColors.light;

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, colors, gradients, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
