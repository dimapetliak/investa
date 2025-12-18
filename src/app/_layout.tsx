import { useAppInit } from '@/hooks/use-app-init';
import { useOnboarding } from '@/hooks/use-onboarding';
import { StackNavigator } from '@/navigation/stack-navigator/stack-navigator';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { router, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  useAppInit();
  const { isOnboardingCompleted, isLoading } = useOnboarding();

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
      <ThemeProvider value={DefaultTheme}>
        <StackNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
 