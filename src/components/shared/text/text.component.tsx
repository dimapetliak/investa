import React from "react";
import { Text as RNText } from "react-native";
import { toneStyles, variantStyles } from "./text.styles";
import type { TextProps } from "./text.types";

export const Text: React.FC<TextProps> = ({
  variant = "body",
  tone = "default",
  align = "left",
  style,
  children,
  ...rest
}) => {
  return (
    <RNText
      {...rest}
      style={[
        variantStyles[variant],
        toneStyles[tone],
        align ? { textAlign: align } : null,
        style,
      ]}
    >
      {children}
    </RNText>
  );
};
