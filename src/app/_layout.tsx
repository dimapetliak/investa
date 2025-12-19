import { ThemeProvider, useTheme } from '@/contexts/theme-context';
import { useAppInit } from '@/hooks/use-app-init';
import { useOnboarding } from '@/hooks/use-onboarding';
import { StackNavigator } from '@/navigation/stack-navigator/stack-navigator';
import { QueryProvider } from '@/providers';
import { DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { router, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  anchor: '(tabs)',
};

function AppContent() {
  useAppInit();
  const { isOnboardingCompleted, isLoading } = useOnboarding();
  const { colorScheme } = useTheme();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    // Hide splash screen once we know where to navigate
    SplashScreen.hideAsync();

    // Navigate based on onboarding status
    if (!isOnboardingCompleted) {
      router.replace('/onboarding');
    }
  }, [isLoading, isOnboardingCompleted]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationThemeProvider value={DefaultTheme}>
        <StackNavigator />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </NavigationThemeProvider>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </QueryProvider>
  );
}
 