import { Button, ScreenLayout, Text } from "@/components/_shared";
import { router } from 'expo-router';

export default function AssetsScreen() {
  return (
    <ScreenLayout containerProps={{ gap: "md" }}>
      <Text variant="h2">Assets Screen</Text>
      <Button onPress={() => router.push('/add-asset')}>Add Asset</Button>
    </ScreenLayout>
  )
}