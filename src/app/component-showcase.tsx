import { AssetTag } from '@/src/components/financial/asset-tag/asset-tag.component';
import { PortfolioSummaryCard } from '@/src/components/financial/portfolio-summary-card/portfolio-summary-card.component';
import { PositionCard } from '@/src/components/financial/position-card/position-card.component';
import { PriceChip } from '@/src/components/financial/price-chip/price-chip.component';
import { TickerBadge } from '@/src/components/financial/ticker-badge/ticker-badge.component';
import { TradeRow } from '@/src/components/financial/trade-row/trade-row.component';
import { Button } from '@/src/components/shared/button/button.component';
import { Card } from '@/src/components/shared/card/card.component';
import { Divider } from '@/src/components/shared/divider/divider.component';
import { EmptyState } from '@/src/components/shared/empty-state/empty-state.component';
import { ErrorState } from '@/src/components/shared/error-state/error-state.component';
import { FloatingActionButton } from '@/src/components/shared/floating-action-button/floating-action-button.component';
import { FormError } from '@/src/components/shared/form-error/form-error.component';
import { HelperText } from '@/src/components/shared/helper-text/helper-text.component';
import { IconButton } from '@/src/components/shared/icon-button/icon-button.component';
import { Input } from '@/src/components/shared/Input/input.component';
import { KeyValueRow } from '@/src/components/shared/key-value-row/key-value-row.component';
import { Label } from '@/src/components/shared/label/label.component';
import { LinearGradient } from '@/src/components/shared/linear-gradient/linear-gradient.component';
import { ListItem } from '@/src/components/shared/list-item/list-item.component';
import { LoadingSpinner } from '@/src/components/shared/loading-spinner/loading-spinner.component';
import { NumberInput } from '@/src/components/shared/number-input/number-input.component';
import { ScreenContainer } from '@/src/components/shared/screen-container/screen-container.component';
import { SearchInput } from '@/src/components/shared/search-input/search-input.component';
import { SectionHeader } from '@/src/components/shared/section-header/section-header.component';
import { SegmentedControl } from '@/src/components/shared/segmented-control/segmented-control.component';
import { Select } from '@/src/components/shared/select/select.component';
import { Skeleton } from '@/src/components/shared/skeleton/skeleton.component';
import { Text } from '@/src/components/shared/text/text.component';
import { Toggle } from '@/src/components/shared/toggle/toggle.component';
import { ValueWithChange } from '@/src/components/shared/value-with-change/value-with-change.component';
import { Spacing } from '@/src/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function ComponentShowcase() {
  const [toggleValue, setToggleValue] = useState(false);
  const [segmentedIndex, setSegmentedIndex] = useState(0);
  const [selectValue, setSelectValue] = useState<string | number | undefined>();
  const [searchValue, setSearchValue] = useState('');

  return (
    <ScreenContainer>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: Spacing.md }}>
        {/* Typography */}
        <SectionHeader title="Typography" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.sm }}>
            <Text variant="h1">Heading 1</Text>
            <Text variant="h2">Heading 2</Text>
            <Text variant="h3">Heading 3</Text>
            <Text variant="subtitle">Subtitle</Text>
            <Text variant="body">Body text</Text>
            <Text variant="bodySmall">Small body text</Text>
            <Text variant="caption">CAPTION TEXT</Text>
            <Divider style={{ marginVertical: Spacing.sm }} />
            <Text variant="body" tone="default">Default tone</Text>
            <Text variant="body" tone="muted">Muted tone</Text>
            <Text variant="body" tone="success">Success tone</Text>
          </View>
        </Card>

        {/* Buttons */}
        <SectionHeader title="Buttons" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.md }}>
            <View style={{ gap: Spacing.sm }}>
              <Text variant="subtitle">Variants</Text>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="text">Text Button</Button>
            </View>
            <Divider />
            <View style={{ gap: Spacing.sm }}>
              <Text variant="subtitle">Sizes</Text>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </View>
            <Divider />
            <View style={{ gap: Spacing.sm }}>
              <Text variant="subtitle">States</Text>
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
              <Button
                leftIcon={<Ionicons name="add" size={20} color="white" />}
              >
                With Left Icon
              </Button>
              <Button
                rightIcon={<Ionicons name="arrow-forward" size={20} color="#155DFC" />}
                variant="outline"
              >
                With Right Icon
              </Button>
            </View>
          </View>
        </Card>

        {/* Icon Buttons */}
        <SectionHeader title="Icon Buttons" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ flexDirection: 'row', gap: Spacing.md, flexWrap: 'wrap' }}>
            <IconButton
              icon={<Ionicons name="heart" size={20} color="white" />}
              variant="default"
            />
            <IconButton
              icon={<Ionicons name="settings" size={20} color="#155DFC" />}
              variant="outline"
            />
            <IconButton
              icon={<Ionicons name="close" size={20} color="#364153" />}
              variant="ghost"
            />
            <IconButton
              icon={<Ionicons name="star" size={16} color="white" />}
              size="sm"
            />
            <IconButton
              icon={<Ionicons name="star" size={24} color="white" />}
              size="lg"
            />
          </View>
        </Card>

        {/* Floating Action Button */}
        <SectionHeader title="Floating Action Button" />
        <Card style={{ marginBottom: Spacing.lg, alignItems: 'center' }}>
          <FloatingActionButton
            icon={<Ionicons name="add" size={24} color="white" />}
            onPress={() => console.log('FAB pressed')}
          />
        </Card>

        {/* Toggle */}
        <SectionHeader title="Toggle" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.md }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text variant="body">Enable notifications</Text>
              <Toggle value={toggleValue} onValueChange={setToggleValue} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text variant="body">Small toggle</Text>
              <Toggle value={true} size="sm" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text variant="body">Disabled</Text>
              <Toggle value={true} disabled />
            </View>
          </View>
        </Card>

        {/* Segmented Control */}
        <SectionHeader title="Segmented Control" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <SegmentedControl
            options={['All', 'Stocks', 'Crypto']}
            selectedIndex={segmentedIndex}
            onSelect={setSegmentedIndex}
          />
        </Card>

        {/* Inputs */}
        <SectionHeader title="Inputs" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.md }}>
            <Input label="Email Address" placeholder="you@example.com" />
            <Input
              label="Password"
              placeholder="Enter password"
              secureTextEntry
              helperText="Must be at least 8 characters"
            />
            <Input
              label="Email with Error"
              placeholder="you@example.com"
              error="Please enter a valid email address"
              defaultValue="invalid-email"
            />
            <Input
              label="Disabled Input"
              placeholder="Cannot edit"
              isDisabled
              defaultValue="Disabled value"
            />
            <Input
              label="With Icons"
              placeholder="Search..."
              leftIcon={<Ionicons name="search" size={20} color="#6A7282" />}
            />
          </View>
        </Card>

        {/* Number Input */}
        <SectionHeader title="Number Input" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <NumberInput
            label="Price"
            placeholder="0.00"
            decimalPlaces={2}
          />
        </Card>

        {/* Select */}
        <SectionHeader title="Select" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <Select
            label="Asset Type"
            options={[
              { label: 'Stock', value: 'stock' },
              { label: 'Crypto', value: 'crypto' },
            ]}
            value={selectValue}
            onChangeValue={setSelectValue}
            placeholder="Select asset type"
          />
        </Card>

        {/* Search Input */}
        <SectionHeader title="Search Input" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <SearchInput
            value={searchValue}
            onChangeText={setSearchValue}
            onClear={() => setSearchValue('')}
            placeholder="Search assets..."
          />
        </Card>

        {/* Form Helpers */}
        <SectionHeader title="Form Helpers" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.md }}>
            <Label required>Required Field</Label>
            <Label>Optional Field</Label>
            <HelperText text="This is helper text" />
            <FormError message="This is an error message" />
          </View>
        </Card>

        {/* Financial Components */}
        <SectionHeader title="Financial Components" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.md }}>
            <View style={{ flexDirection: 'row', gap: Spacing.sm, flexWrap: 'wrap' }}>
              <TickerBadge ticker="AAPL" />
              <TickerBadge ticker="BTC" />
              <TickerBadge ticker="GOOGL" size="lg" />
            </View>
            <Divider />
            <View style={{ flexDirection: 'row', gap: Spacing.sm }}>
              <AssetTag type="stock" />
              <AssetTag type="crypto" />
            </View>
            <Divider />
            <ValueWithChange value={125000} changePercent={12.5} size="lg" />
            <ValueWithChange value={95000} changePercent={-5.2} size="md" />
            <Divider />
            <KeyValueRow label="Quantity" value="10.5" />
            <KeyValueRow label="Average Price" value="$150.25" />
            <KeyValueRow label="Current Price" value="$165.50" />
            <Divider />
            <View style={{ flexDirection: 'row', gap: Spacing.sm, flexWrap: 'wrap' }}>
              <PriceChip price={165.50} timestamp={new Date('2024-01-15T10:30:00')} />
              <PriceChip price={45000} timestamp={new Date('2024-01-15T11:00:00')} />
            </View>
          </View>
        </Card>

        {/* Position Card */}
        <SectionHeader title="Position Card" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <PositionCard
            ticker="AAPL"
            assetType="stock"
            quantity={10}
            averagePrice={150.25}
            currentPrice={165.50}
            currentValue={1655.00}
            pnl={152.50}
            pnlPercent={10.15}
          />
        </Card>

        {/* Trade Row */}
        <SectionHeader title="Trade Row" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.xs }}>
            <TradeRow
              ticker="AAPL"
              type="buy"
              price={150.25}
              quantity={10}
              date={new Date('2024-01-15')}
            />
            <Divider />
            <TradeRow
              ticker="BTC"
              type="buy"
              price={40000}
              quantity={0.5}
              date={new Date('2024-01-10')}
            />
            <Divider />
            <TradeRow
              ticker="AAPL"
              type="sell"
              price={165.50}
              quantity={5}
              date={new Date('2024-02-20')}
            />
          </View>
        </Card>

        {/* Portfolio Summary */}
        <SectionHeader title="Portfolio Summary" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <PortfolioSummaryCard
            totalValue={125000}
            totalCost={100000}
            totalPnl={25000}
            totalPnlPercent={25.0}
          />
        </Card>

        {/* List Item */}
        <SectionHeader title="List Item" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.xs }}>
            <ListItem
              leftContent={<TickerBadge ticker="AAPL" size="sm" />}
              rightContent={<Text variant="subtitle">$165.50</Text>}
            >
              <Text variant="body" style={{ fontWeight: '600' }}>Apple Inc.</Text>
              <Text variant="bodySmall" tone="muted">Technology</Text>
            </ListItem>
            <Divider />
            <ListItem
              leftContent={<TickerBadge ticker="BTC" size="sm" />}
              rightContent={
                <View style={{ alignItems: 'flex-end' }}>
                  <Text variant="subtitle">$45,000</Text>
                  <Text variant="bodySmall" tone="success">+12.5%</Text>
                </View>
              }
            >
              <Text variant="body" style={{ fontWeight: '600' }}>Bitcoin</Text>
              <Text variant="bodySmall" tone="muted">0.5 BTC</Text>
            </ListItem>
          </View>
        </Card>

        {/* States */}
        <SectionHeader title="States" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.lg }}>
            <View style={{ gap: Spacing.md }}>
              <Text variant="subtitle">Loading Spinner</Text>
              <View style={{ flexDirection: 'row', gap: Spacing.lg, alignItems: 'center' }}>
                <LoadingSpinner size="sm" />
                <LoadingSpinner size="md" />
                <LoadingSpinner size="lg" />
              </View>
            </View>
            <Divider />
            <View style={{ gap: Spacing.md }}>
              <Text variant="subtitle">Skeleton</Text>
              <Skeleton width="100%" height={20} />
              <Skeleton width="80%" height={16} />
              <Skeleton variant="circular" width={50} height={50} />
            </View>
            <Divider />
            <EmptyState
              title="No trades yet"
              message="Start tracking your investments by adding your first trade."
              icon={<Ionicons name="add-circle-outline" size={64} color="#6A7282" />}
              action={<Button>Add First Trade</Button>}
            />
            <Divider />
            <ErrorState
              title="Something went wrong"
              message="We couldn't load your data. Please try again."
              icon={<Ionicons name="alert-circle-outline" size={64} color="#EF4444" />}
              action={<Button>Retry</Button>}
            />
          </View>
        </Card>

        {/* Cards */}
        <SectionHeader title="Cards" />
        <View style={{ gap: Spacing.md, marginBottom: Spacing.lg }}>
          <Card variant="default">
            <Text variant="body">Default card</Text>
          </Card>
          <Card variant="elevated">
            <Text variant="body">Elevated card with shadow</Text>
          </Card>
          <Card variant="outlined">
            <Text variant="body">Outlined card with border</Text>
          </Card>
        </View>

        {/* Dividers */}
        <SectionHeader title="Dividers" />
        <Card style={{ marginBottom: Spacing.lg }}>
          <View style={{ gap: Spacing.md }}>
            <Text variant="body">Content above</Text>
            <Divider />
            <Text variant="body">Content below</Text>
            <Divider variant="dashed" />
            <Text variant="body">Dashed divider</Text>
          </View>
        </Card>

        {/* Linear Gradient */}
        <SectionHeader title="Linear Gradient" />
        <View style={{ gap: Spacing.md, marginBottom: Spacing.lg }}>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient variant="primary" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text variant="h3" style={{ color: 'white' }}>Primary Gradient</Text>
            </LinearGradient>
          </View>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient variant="success" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text variant="h3" style={{ color: 'white' }}>Success Gradient</Text>
            </LinearGradient>
          </View>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient variant="purple" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text variant="h3" style={{ color: 'white' }}>Purple Gradient</Text>
            </LinearGradient>
          </View>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient variant="blue" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text variant="h3" style={{ color: 'white' }}>Blue Gradient</Text>
            </LinearGradient>
          </View>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient
              startColor="#FF6B6B"
              endColor="#4ECDC4"
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text variant="h3" style={{ color: 'white' }}>Custom Colors</Text>
            </LinearGradient>
          </View>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient
              colors={['#667EEA', '#764BA2', '#F093FB']}
              locations={[0, 0.5, 1]}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text variant="h3" style={{ color: 'white' }}>Multi-Color Gradient</Text>
            </LinearGradient>
          </View>
          <View style={{ height: 100, borderRadius: 8, overflow: 'hidden' }}>
            <LinearGradient
              variant="primary"
              start={[0, 0]}
              end={[1, 0]}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text variant="h3" style={{ color: 'white' }}>Horizontal Gradient</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

