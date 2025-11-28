import { Button } from '@/components/shared/button/button.component';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={{
      padding: 16
    }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Hello!</Text>
        <Button size={'md'} variant="primary">Add Trade</Button>
        <Button variant="secondary">
          New asset
        </Button>
        <Button variant="outline" isLoading>
          Save
        </Button>
        <Button variant="text" isLoading>
          Save
        </Button>
        <Button fullWidth size="lg">Continue</Button>
        <View style={{ marginTop: 32, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>Development</Text>
          <Button 
            variant="outline" 
            onPress={() => router.push('/component-showcase')}
            fullWidth
          >
            Component Showcase
          </Button>

          <Button 
            variant="outline" 
            onPress={() => router.push('/onboarding')}
            fullWidth
          >
            Go to Onboarding
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

