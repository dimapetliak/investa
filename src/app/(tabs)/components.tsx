import {
  AssetTag,
  Button,
  Card,
  DateTimePicker,
  Divider,
  EmptyState,
  ErrorState,
  IconButton,
  Input,
  KeyValueRow,
  Label,
  ListItem,
  LoadingState,
  NumberInput,
  PortfolioSummaryCard,
  PositionCard,
  ScreenLayout,
  SectionHeader,
  Select,
  Text,
  TradeRow,
  ValueWithChange
} from '@/components';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function ComponentsDocumentation() {
  const [selectValue, setSelectValue] = useState<string | number>('option1');
  const [inputValue, setInputValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [dateValue, setDateValue] = useState<Date>(new Date());

  return (
    <ScreenLayout containerProps={{ noPadding: true }}>
      <ScrollView
        contentContainerStyle={{ padding: Spacing.md }}
        showsVerticalScrollIndicator={false}
      >
        <Text variant="h1" style={{ marginBottom: Spacing.lg }}>
          Component Documentation
        </Text>

        {/* Layout / Structure */}
        <SectionHeader
          title="Layout / Structure"
          subtitle="Components for organizing content"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            SectionHeader
          </Text>
          <SectionHeader
            title="Section Title"
            subtitle="Optional subtitle text"
            action={
              <Button variant="outline" size="sm">
                Action
              </Button>
            }
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            ListItem
          </Text>
          <ListItem
            title="List Item Title"
            subtitle="Optional subtitle text"
            leftIcon={<Ionicons name="star" size={20} />}
            rightIcon={<Ionicons name="chevron-forward" size={20} />}
            onPress={() => console.log('Pressed')}
          />
          <Divider />
          <ListItem
            title="Disabled Item"
            subtitle="This item is disabled"
            disabled
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            Divider
          </Text>
          <Text variant="body">Above divider</Text>
          <Divider spacing="md" />
          <Text variant="body">Below divider</Text>
        </Card>

        {/* Text & Visual Labels */}
        <SectionHeader
          title="Text & Visual Labels"
          subtitle="Typography and label components"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            Text Variants
          </Text>
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="body">Body text</Text>
          <Text variant="caption">Caption text</Text>
          <Text variant="body" color="muted">Muted text</Text>
          <Text variant="body" color="primary">Primary text</Text>
          <Text variant="body" color="error">Error text</Text>
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            Label
          </Text>
          <Label text="Regular Label" />
          <Label text="Required Label" required />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            ValueWithChange
          </Text>
          <ValueWithChange
            value="$1,234.56"
            change={123.45}
            changePercent={10.5}
            size="lg"
          />
          <ValueWithChange
            value="$567.89"
            change={-45.67}
            changePercent={-7.5}
            size="md"
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            KeyValueRow
          </Text>
          <KeyValueRow label="Label" value="Value" />
          <KeyValueRow label="Price" value="$150.00" valueColor="positive" />
          <KeyValueRow label="Loss" value="-$50.00" valueColor="negative" />
        </Card>

        {/* Buttons & Interactions */}
        <SectionHeader
          title="Buttons & Interactions"
          subtitle="Interactive components"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            Button Variants
          </Text>
          <View style={{ gap: Spacing.sm }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="text">Text Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" fullWidth>Full Width</Button>
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </View>
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            IconButton
          </Text>
          <View style={{ flexDirection: 'row', gap: Spacing.sm, flexWrap: 'wrap' }}>
            <IconButton
              icon={<Ionicons name="heart" size={20} />}
              variant="default"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="star" size={20} />}
              variant="primary"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="share" size={20} />}
              variant="outline"
              onPress={() => {}}
            />
            <IconButton
              icon={<Ionicons name="trash" size={20} />}
              variant="ghost"
              onPress={() => {}}
            />
          </View>
        </Card>

        {/* Inputs / Forms */}
        <SectionHeader
          title="Inputs / Forms"
          subtitle="Form input components"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            Input
          </Text>
          <Input
            placeholder="Enter text..."
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Input
            label="With Label"
            placeholder="Enter text..."
          />
          <Input
            label="With Error"
            placeholder="Enter text..."
            error="This field is required"
          />
          <Input
            label="With Hint"
            placeholder="Enter text..."
            hint="This is a helpful hint"
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            NumberInput
          </Text>
          <NumberInput
            label="Quantity"
            value={numberValue}
            onChangeValue={setNumberValue}
            placeholder="0.00"
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            DateTimePicker
          </Text>
          <DateTimePicker
            label="Purchase Date"
            value={dateValue}
            onChangeValue={setDateValue}
            mode="date"
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            Select
          </Text>
          <Select
            label="Select Option"
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            value={selectValue}
            onChangeValue={setSelectValue}
            placeholder="Choose an option"
          />
        </Card>

        {/* Financial / Asset Components */}
        <SectionHeader
          title="Financial / Asset Components"
          subtitle="Investment-specific components"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            AssetTag
          </Text>
          <View style={{ flexDirection: 'row', gap: Spacing.sm }}>
            <AssetTag type="stock" />
            <AssetTag type="crypto" />
          </View>
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            PositionCard
          </Text>
          <PositionCard
            ticker="AAPL"
            assetType="stock"
            quantity={10}
            avgPrice={150.00}
            currentPrice={155.50}
            currentValue={1555.00}
            pnl={55.00}
            pnlPercent={3.67}
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            TradeRow
          </Text>
          <TradeRow
            ticker="AAPL"
            assetType="stock"
            type="buy"
            price={150.00}
            quantity={10}
            date="2024-01-15"
          />
          <TradeRow
            ticker="BTC"
            assetType="crypto"
            type="sell"
            price={45000.00}
            quantity={0.5}
            date="2024-01-20"
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            PortfolioSummaryCard
          </Text>
          <PortfolioSummaryCard
            totalValue={10000.00}
            totalPnL={500.00}
            totalPnLPercent={5.0}
            totalCost={9500.00}
          />
        </Card>

        {/* States & Feedback */}
        <SectionHeader
          title="States & Feedback"
          subtitle="Loading, error, and empty states"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            EmptyState
          </Text>
          <EmptyState
            icon="wallet-outline"
            title="No assets found"
            message="Start tracking your investments by adding your first asset"
            actionLabel="Add Asset"
            onAction={() => console.log('Add asset')}
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            ErrorState
          </Text>
          <ErrorState
            title="Something went wrong"
            message="Unable to load your portfolio. Please try again."
            retryLabel="Retry"
            onRetry={() => console.log('Retry')}
          />
        </Card>

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="h3" style={{ marginBottom: Spacing.sm }}>
            LoadingState
          </Text>
          <LoadingState message="Loading data..." />
        </Card>

        {/* Cards */}
        <SectionHeader
          title="Cards"
          subtitle="Container components"
        />

        <Card style={{ marginBottom: Spacing.md }}>
          <Text variant="body">Default card</Text>
        </Card>

        <Card padding="sm" style={{ marginBottom: Spacing.md }}>
          <Text variant="body">Card with small padding</Text>
        </Card>

        <Card padding="lg" style={{ marginBottom: Spacing.md }}>
          <Text variant="body">Card with large padding</Text>
        </Card>

        <Card elevated style={{ marginBottom: Spacing.md }}>
          <Text variant="body">Elevated card</Text>
        </Card>

        <Card backgroundVariant="info" style={{ marginBottom: Spacing.md }}>
          <Text variant="body">Info variant card</Text>
        </Card>

        <Card backgroundVariant="success" style={{ marginBottom: Spacing.md }}>
          <Text variant="body">Success variant card</Text>
        </Card>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ScreenLayout>
  );
}
