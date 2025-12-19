import { Stack } from "expo-router"

export const StackNavigator = () => {
	return (
		<Stack>
			<Stack.Screen name="onboarding" options={{ headerShown: false }} />
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="add-asset"
				options={{
					presentation: 'modal',
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="edit-asset"
				options={{
					presentation: 'modal',
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="add-trade"
				options={{
					presentation: 'modal',
					title: 'Add Trade',
					headerBackTitle: 'Back',
				}}
			/>
			<Stack.Screen
				name="edit-trade"
				options={{
					title: 'Edit Trade',
					headerBackTitle: 'Back',
				}}
			/>
		</Stack>
	)
}