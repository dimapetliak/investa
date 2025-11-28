import { Button, ScreenLayout, Text } from '@/components/_shared';
import { Spacing } from '@/theme/spacing';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScreenLayout containerProps={{ padding: 'md' }}>
      <Text variant="h2">Hello!</Text>
      <Button variant="primary" size="md">Add Trade</Button>
      <Button variant="secondary">New asset</Button>
      <Button variant="outline" loading>Save</Button>
      <Button variant="text" loading>Save</Button>
      <Button fullWidth size="lg">Continue</Button>
      <View style={{ marginTop: Spacing.xl, paddingTop: Spacing.md, borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
        <Text variant="h3" style={{ marginBottom: Spacing.sm }}>Development</Text>
        <Button 
          variant="outline" 
          onPress={() => router.push('/component-showcase')}
          fullWidth
        >
          Component Showcase
        </Button>
        <Button 
          variant="outline" 
          onPress={() => router.push('/add-asset')}
          fullWidth
        >
          Add Asset
        </Button>
      </View>
    </ScreenLayout>
  );
}

