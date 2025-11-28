import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { Card } from '../card';
import { KeyValueRow } from '../key-value-row';
import { Text } from '../text/text.component';
import { ValueWithChange } from '../value-with-change';
import { styles } from './portfolio-summary-card.styles';
import { PortfolioSummaryCardProps } from './portfolio-summary-card.types';

export const PortfolioSummaryCard = ({
  totalValue,
  totalPnL,
  totalPnLPercent,
  totalCost,
  onPress,
  style,
}: PortfolioSummaryCardProps) => {
  return (
    <Card style={[styles.card, style]} shadow onPress={onPress}>
      <Text variant="h3" style={{ marginBottom: Spacing.md }}>
        Portfolio Summary
      </Text>
      
      <View style={styles.summary}>
        <ValueWithChange
          value={totalValue}
          change={totalPnL}
          changePercent={totalPnLPercent}
          size="lg"
        />
      </View>

      <View style={styles.details}>
        <KeyValueRow label="Total Cost" value={`$${totalCost.toFixed(2)}`} />
        <KeyValueRow
          label="Total P&L"
          value={`$${totalPnL.toFixed(2)}`}
          valueColor={totalPnL >= 0 ? 'primary' : 'error'}
        />
      </View>
    </Card>
  );
};

