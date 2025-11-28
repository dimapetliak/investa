import React from "react";
import { View } from "react-native";
import { Text } from "../../shared/text/text.component";
import { chipStyles } from "./price-chip.styles";
import type { PriceChipProps } from "./price-chip.types";

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const PriceChip: React.FC<PriceChipProps> = ({
  price,
  timestamp,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={[chipStyles.container, style]}>
      <Text variant="body" style={{ fontWeight: "600" }}>
        {formatCurrency(price)}
      </Text>
      {timestamp && (
        <Text variant="caption" tone="muted">
          {formatTime(timestamp)}
        </Text>
      )}
    </View>
  );
};


