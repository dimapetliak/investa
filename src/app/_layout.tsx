import { useAppInit } from '@/hooks/use-app-init';
import { StackNavigator } from '@/navigation/stack-navigator/stack-navigator';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  useAppInit();

  return (
    <ThemeProvider value={DefaultTheme}>
      <StackNavigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
 