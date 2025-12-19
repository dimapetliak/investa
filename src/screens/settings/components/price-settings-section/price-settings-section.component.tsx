import { Card, SectionHeader, Select, Text } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import type {
  CryptoPriceSource,
  PriceRefreshInterval,
  StockPriceSource,
} from '@/store';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import {
  CRYPTO_PRICE_SOURCE_OPTIONS,
  PRICE_REFRESH_OPTIONS,
  STOCK_PRICE_SOURCE_OPTIONS,
} from '../../constants';
import type { PriceSettingsSectionProps } from './price-settings-section.types';

export const PriceSettingsSection = ({
  priceRefreshInterval,
  onPriceRefreshIntervalChange,
  stockPriceSource,
  onStockPriceSourceChange,
  cryptoPriceSource,
  onCryptoPriceSourceChange,
}: PriceSettingsSectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: Spacing.lg }}>
      <SectionHeader title="Price Updates" />
      <Card>
        <View style={{ padding: Spacing.md, gap: Spacing.md }}>
          <Select
            label="Refresh Interval"
            placeholder="Select interval"
            options={PRICE_REFRESH_OPTIONS}
            value={priceRefreshInterval}
            onChangeValue={(value) =>
              onPriceRefreshIntervalChange(value as PriceRefreshInterval)
            }
            leftIcon={
              <Ionicons
                name="refresh-outline"
                size={20}
                color={colors.foreground}
              />
            }
          />

          <Select
            label="Stock Price Source"
            placeholder="Select source"
            options={STOCK_PRICE_SOURCE_OPTIONS}
            value={stockPriceSource}
            onChangeValue={(value) =>
              onStockPriceSourceChange(value as StockPriceSource)
            }
            leftIcon={
              <Ionicons
                name="trending-up-outline"
                size={20}
                color={colors.foreground}
              />
            }
          />

          <Select
            label="Crypto Price Source"
            placeholder="Select source"
            options={CRYPTO_PRICE_SOURCE_OPTIONS}
            value={cryptoPriceSource}
            onChangeValue={(value) =>
              onCryptoPriceSourceChange(value as CryptoPriceSource)
            }
            leftIcon={
              <Ionicons
                name="logo-bitcoin"
                size={20}
                color={colors.foreground}
              />
            }
          />

          <Text variant="caption" color="muted" style={{ marginTop: Spacing.xs }}>
            Price updates are not yet implemented in this version.
          </Text>
        </View>
      </Card>
    </View>
  );
};

