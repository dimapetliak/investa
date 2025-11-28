import { Spacing } from '@/theme/spacing';
import React from 'react';
import { View } from 'react-native';
import { AssetTag } from '../asset-tag';
import { Card } from '../card';
import { KeyValueRow } from '../key-value-row';
import { TickerBadge } from '../ticker-badge';
import { ValueWithChange } from '../value-with-change';
import { styles } from './position-card.styles';
import { PositionCardProps } from './position-card.types';

export const PositionCard = ({
  ticker,
  assetType,
  quantity,
  avgPrice,
  currentPrice,
  currentValue,
  pnl,
  pnlPercent,
  onPress,
  style,
}: PositionCardProps) => {
  return (
    <Card style={[styles.card, style]} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TickerBadge ticker={ticker} size="md" />
          <AssetTag type={assetType} style={{ marginLeft: Spacing.sm }} />
        </View>
        <ValueWithChange
          value={currentValue}
          change={pnl}
          changePercent={pnlPercent}
          size="md"
        />
      </View>

      <View style={styles.details}>
        <KeyValueRow label="Quantity" value={quantity} />
        <KeyValueRow label="Avg Price" value={`$${avgPrice.toFixed(2)}`} />
        <KeyValueRow label="Current Price" value={`$${currentPrice.toFixed(2)}`} />
      </View>
    </Card>
  );
};

