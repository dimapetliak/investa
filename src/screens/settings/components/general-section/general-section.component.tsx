import { Card, SectionHeader, Select } from '@/components';
import { useTheme } from '@/contexts/theme-context';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { CURRENCY_OPTIONS } from '../../constants';
import type { GeneralSectionProps } from './general-section.types';

export const GeneralSection = ({
  baseCurrency,
  onCurrencyChange,
}: GeneralSectionProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: Spacing.lg }}>
      <SectionHeader title="General" />
      <Card>
        <View style={{ padding: Spacing.md }}>
          <Select
            label="Base Currency"
            placeholder="Select currency"
            options={[...CURRENCY_OPTIONS]}
            value={baseCurrency}
            onChangeValue={(value) => onCurrencyChange(value as string)}
            leftIcon={
              <Ionicons
                name="cash-outline"
                size={20}
                color={colors.foreground}
              />
            }
          />
        </View>
      </Card>
    </View>
  );
};

