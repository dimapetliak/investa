import React from "react";
import { Text } from "../text/text.component";
import { errorStyles } from "./form-error.styles";
import type { FormErrorProps } from "./form-error.types";

export const FormError: React.FC<FormErrorProps> = ({
  message,
  style,
  ...rest
}) => {
  if (!message) return null;

  return (
    <Text
      {...rest}
      variant="bodySmall"
      style={[errorStyles.base, style]}
    >
      {message}
    </Text>
  );
};


