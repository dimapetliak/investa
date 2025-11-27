import React from "react";
import { View } from "react-native";
import { Card } from "../../shared/card/card.component";
import { Text } from "../../shared/text/text.component";
import { ValueWithChange } from "../../shared/value-with-change/value-with-change.component";
import { cardStyles } from "./portfolio-summary-card.styles";
import type { PortfolioSummaryCardProps } from "./portfolio-summary-card.types";

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const PortfolioSummaryCard: React.FC<PortfolioSummaryCardProps> = ({
  totalValue,
  totalCost,
  totalPnl,
  totalPnlPercent,
  style,
  ...rest
}) => {
  return (
    <Card style={[cardStyles.container, style]} {...rest}>
      <View style={cardStyles.header}>
        <Text variant="bodySmall" tone="muted">
          Portfolio Value
        </Text>
        <ValueWithChange
          value={totalValue}
          changePercent={totalPnlPercent}
          size="lg"
        />
      </View>

      <View style={cardStyles.stats}>
        <View style={cardStyles.statItem}>
          <Text variant="bodySmall" tone="muted">
            Total Cost
          </Text>
          <Text variant="subtitle" style={{ marginTop: 4 }}>
            {formatCurrency(totalCost)}
          </Text>
        </View>
        <View style={[cardStyles.statItem, { alignItems: "flex-end" }]}>
          <Text variant="bodySmall" tone="muted">
            Total P&L
          </Text>
          <ValueWithChange
            value={totalPnl}
            changePercent={totalPnlPercent}
            size="md"
            style={{ marginTop: 4 }}
          />
        </View>
      </View>
    </Card>
  );
};

