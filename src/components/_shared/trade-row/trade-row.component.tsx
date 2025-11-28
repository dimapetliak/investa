import { Colors } from '@/theme/colors';
import { Fonts } from '@/theme/fonts';
import { Spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { AssetTag } from '../asset-tag';
import { Text } from '../text/text.component';
import { TickerBadge } from '../ticker-badge';
import { styles } from './trade-row.styles';
import { TradeRowProps } from './trade-row.types';

export const TradeRow = ({
  ticker,
  assetType,
  type,
  price,
  quantity,
  date,
  onPress,
  style,
}: TradeRowProps) => {
  const isBuy = type === 'buy';
  const totalValue = price * quantity;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TickerBadge ticker={ticker} size="sm" />
          <AssetTag type={assetType} style={{ marginLeft: Spacing.xs }} />
        </View>
        <View style={[styles.typeBadge, isBuy ? styles.buyBadge : styles.sellBadge]}>
          <Ionicons
            name={isBuy ? 'arrow-up' : 'arrow-down'}
            size={12}
            color={isBuy ? Colors.success : Colors.error}
          />
          <Text
            variant="caption"
            style={[
              styles.typeText,
              { fontFamily: Fonts.semiBold, color: isBuy ? Colors.success : Colors.error },
            ]}
          >
            {isBuy ? 'Buy' : 'Sell'}
          </Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Price</Text>
          <Text variant="body">${price.toFixed(2)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Quantity</Text>
          <Text variant="body">{quantity}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Total</Text>
          <Text variant="body" style={{ fontFamily: Fonts.semiBold }}>
            ${totalValue.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text variant="caption" color="muted">Date</Text>
          <Text variant="caption">{date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

