import React from "react";
import { View } from "react-native";
import { cardStyles, paddingStyles } from "./card.styles";
import type { CardProps } from "./card.types";

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = "default",
  padding = "md",
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[cardStyles.base, cardStyles[variant], paddingStyles[padding], style]}
    >
      {children}
    </View>
  );
};


