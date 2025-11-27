import React from "react";
import { Text } from "../text/text.component";
import { helperStyles } from "./helper-text.styles";
import type { HelperTextProps } from "./helper-text.types";

export const HelperText: React.FC<HelperTextProps> = ({
  text,
  style,
  ...rest
}) => {
  if (!text) return null;

  return (
    <Text
      {...rest}
      variant="bodySmall"
      tone="muted"
      style={[helperStyles.base, style]}
    >
      {text}
    </Text>
  );
};

