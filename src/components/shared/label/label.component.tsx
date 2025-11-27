import React from "react";
import { Text } from "../text/text.component";
import { labelStyles } from "./label.styles";
import type { LabelProps } from "./label.types";

export const Label: React.FC<LabelProps> = ({
  children,
  style,
  required,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      variant="bodySmall"
      style={[labelStyles.base, required && labelStyles.required, style]}
    >
      {children}
      {required && <Text style={labelStyles.required}> *</Text>}
    </Text>
  );
};

