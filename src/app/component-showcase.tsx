import { Button, Card, Input, Text } from '@/components';
import { Spacing } from '@/theme/spacing';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: Spacing.md }}>
      <View style={{ gap: Spacing.lg }}>
        <Text variant="h1">Component Showcase</Text>

        <View>
          <Text variant="h2" style={{ marginBottom: Spacing.md }}>Typography</Text>
          <Card>
            <View style={{ gap: Spacing.sm }}>
              <Text variant="h1">Heading 1</Text>
              <Text variant="h2">Heading 2</Text>
              <Text variant="h3">Heading 3</Text>
              <Text variant="body">Body text</Text>
              <Text variant="caption">Caption text</Text>
              <Text variant="body" color="muted">Muted text</Text>
              <Text variant="body" color="primary">Primary text</Text>
              <Text variant="body" color="error">Error text</Text>
            </View>
          </Card>
        </View>

        <View>
          <Text variant="h2" style={{ marginBottom: Spacing.md }}>Buttons</Text>
          <Card>
            <View style={{ gap: Spacing.sm }}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="text">Text Button</Button>
              <Button variant="primary" size="sm">Small Button</Button>
              <Button variant="primary" size="md">Medium Button</Button>
              <Button variant="primary" size="lg">Large Button</Button>
              <Button variant="primary" fullWidth>Full Width Button</Button>
              <Button variant="primary" loading>Loading Button</Button>
              <Button variant="primary" disabled>Disabled Button</Button>
            </View>
          </Card>
        </View>

        <View>
          <Text variant="h2" style={{ marginBottom: Spacing.md }}>Inputs</Text>
          <Card>
            <View style={{ gap: Spacing.sm }}>
              <Input placeholder="Enter text..." />
              <Input label="With Label" placeholder="Enter text..." />
              <Input label="With Error" placeholder="Enter text..." error="This field is required" />
              <Input 
                label="Multiline" 
                placeholder="Enter multiple lines..." 
                multiline 
                numberOfLines={4}
              />
            </View>
          </Card>
        </View>

        <View>
          <Text variant="h2" style={{ marginBottom: Spacing.md }}>Cards</Text>
          <Card>
            <Text variant="body">This is a card with default padding</Text>
          </Card>
          <Card padding="sm">
            <Text variant="body">Card with small padding</Text>
          </Card>
          <Card padding="lg">
            <Text variant="body">Card with large padding</Text>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
