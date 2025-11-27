import React from "react";
import { View } from "react-native";
import { Text } from "../text/text.component";
import { changeStyles, containerStyles, valueStyles } from "./value-with-change.styles";
import type { ValueWithChangeProps } from "./value-with-change.types";

const formatCurrency = (value: number | string): string => {
  if (typeof value === "string") return value;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatPercent = (value: number): string => {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
};

export const ValueWithChange: React.FC<ValueWithChangeProps> = ({
  value,
  change,
  changePercent,
  style,
  showPositiveSign = false,
  size = "md",
  ...rest
}) => {
  const hasChange = change !== undefined || changePercent !== undefined;
  const changeValue = changePercent !== undefined ? changePercent : (change || 0);
  const isPositive = changeValue > 0;
  const isNegative = changeValue < 0;

  const changeColorStyle = isPositive
    ? changeStyles.positive
    : isNegative
    ? changeStyles.negative
    : changeStyles.neutral;

  return (
    <View {...rest} style={[containerStyles.base, style]}>
      <Text style={valueStyles[size]}>{formatCurrency(value)}</Text>
      {hasChange && (
        <Text style={[changeStyles[size], changeColorStyle]}>
          {formatPercent(changeValue)}
        </Text>
      )}
    </View>
  );
};

