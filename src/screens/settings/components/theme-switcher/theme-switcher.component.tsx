import { Button, Card, Container, Text } from "@/components/_shared"

export const ThemeSwitcher = () => {
	return (
		<Card shadow>
			<Container gap='md'>
				<Text variant='h3'>Appereance</Text>
				<Text variant='caption'>Change the appearance of the app</Text>
				<Container noPadding flexDirection=	"row" gap="sm">
					<Button size="md" variant="outline">Light Mode</Button>
					<Button size="md" variant="outline">Dark Mode</Button>
				</Container>
			</Container>
		</Card>
	)
}