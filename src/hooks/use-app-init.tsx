import { SplashScreen } from "expo-router";
import { useLoadFont } from "./use-load-font";
import { usePortfolioInit } from "./use-portfolio-init";


export const useAppInit = () => {
	// Prevent the splash screen from auto-hiding before asset loading is complete.
	SplashScreen.preventAutoHideAsync();

	useLoadFont();
	usePortfolioInit();
}