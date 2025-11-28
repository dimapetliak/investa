import { Stack } from "expo-router"

export const StackNavigator = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="component-showcase" options={{ title: 'Component Showcase' }} />
			<Stack.Screen
				name="add-asset"
				options={{
					presentation: 'modal',
					title: 'Add Asset',
				}}
			/>
		</Stack>
	)
}