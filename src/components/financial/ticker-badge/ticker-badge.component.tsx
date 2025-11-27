import React from "react";
import { View } from "react-native";
import { Text } from "../../shared/text/text.component";
import { badgeStyles, textStyles } from "./ticker-badge.styles";
import type { TickerBadgeProps } from "./ticker-badge.types";

export const TickerBadge: React.FC<TickerBadgeProps> = ({
  ticker,
  style,
  size = "md",
  ...rest
}) => {
  return (
    <View {...rest} style={[badgeStyles.base, badgeStyles[size], style]}>
      <Text style={textStyles[size]}>{ticker.toUpperCase()}</Text>
    </View>
  );
};

