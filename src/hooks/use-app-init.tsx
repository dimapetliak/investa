import { SplashScreen } from "expo-router";
import { useLoadFont } from "./use-load-font";


export const useAppInit = () => {
	// Prevent the splash screen from auto-hiding before asset loading is complete.
	SplashScreen.preventAutoHideAsync();

	useLoadFont();
}