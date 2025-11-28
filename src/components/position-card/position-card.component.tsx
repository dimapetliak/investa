import React from "react";
import { Pressable, View } from "react-native";
import { Card } from "../../shared/card/card.component";
import { KeyValueRow } from "../../shared/key-value-row/key-value-row.component";
import { Text } from "../../shared/text/text.component";
import { ValueWithChange } from "../../shared/value-with-change/value-with-change.component";
import { AssetTag } from "../asset-tag/asset-tag.component";
import { TickerBadge } from "../ticker-badge/ticker-badge.component";
import { cardStyles } from "./position-card.styles";
import type { PositionCardProps } from "./position-card.types";

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const PositionCard: React.FC<PositionCardProps> = ({
  ticker,
  assetType,
  quantity,
  averagePrice,
  currentPrice,
  currentValue,
  pnl,
  pnlPercent,
  onPress,
  style,
  ...rest
}) => {
  const Component = onPress ? Pressable : View;

  return (
    <Component
      {...rest}
      onPress={onPress}
      style={({ pressed }) => [pressed && { opacity: 0.7 }, style]}
    >
      <Card style={cardStyles.container}>
        <View style={cardStyles.header}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <TickerBadge ticker={ticker} size="md" />
            <AssetTag type={assetType} />
          </View>
        </View>

        <View style={cardStyles.content}>
          <KeyValueRow label="Quantity" value={quantity.toFixed(4)} />
          <KeyValueRow label="Avg Price" value={formatCurrency(averagePrice)} />
          <KeyValueRow label="Current Price" value={formatCurrency(currentPrice)} />
        </View>

        <View style={cardStyles.footer}>
          <View>
            <Text variant="bodySmall" tone="muted">
              Current Value
            </Text>
            <Text variant="h3" style={{ marginTop: 4 }}>
              {formatCurrency(currentValue)}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text variant="bodySmall" tone="muted">
              P&L
            </Text>
            <ValueWithChange
              value={pnl}
              changePercent={pnlPercent}
              size="md"
              style={{ marginTop: 4 }}
            />
          </View>
        </View>
      </Card>
    </Component>
  );
};


