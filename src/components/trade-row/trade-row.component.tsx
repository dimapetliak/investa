import React from "react";
import { Pressable, View } from "react-native";
import { Text } from "../../shared/text/text.component";
import { TickerBadge } from "../ticker-badge/ticker-badge.component";
import { rowStyles } from "./trade-row.styles";
import type { TradeRowProps } from "./trade-row.types";

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const TradeRow: React.FC<TradeRowProps> = ({
  ticker,
  type,
  price,
  quantity,
  date,
  onPress,
  style,
  ...rest
}) => {
  const Component = onPress ? Pressable : View;
  const totalValue = price * quantity;

  return (
    <Component
      {...rest}
      onPress={onPress}
      style={({ pressed }) => [
        rowStyles.container,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <View style={rowStyles.leftSection}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <TickerBadge ticker={ticker} size="sm" />
          <View
            style={[
              rowStyles.typeBadge,
              type === "buy" ? rowStyles.buy : rowStyles.sell,
            ]}
          >
            <Text
              style={[
                rowStyles.typeText,
                type === "buy" ? rowStyles.buyText : rowStyles.sellText,
              ]}
            >
              {type}
            </Text>
          </View>
        </View>
        <Text variant="bodySmall" tone="muted">
          {formatDate(date)}
        </Text>
      </View>

      <View style={rowStyles.rightSection}>
        <Text variant="body" style={{ fontWeight: "600" }}>
          {formatCurrency(totalValue)}
        </Text>
        <Text variant="bodySmall" tone="muted">
          {quantity.toFixed(4)} @ {formatCurrency(price)}
        </Text>
      </View>
    </Component>
  );
};


