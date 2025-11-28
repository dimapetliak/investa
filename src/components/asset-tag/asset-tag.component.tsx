import React from "react";
import { View } from "react-native";
import { Text } from "../../shared/text/text.component";
import { tagStyles, textStyles } from "./asset-tag.styles";
import type { AssetTagProps } from "./asset-tag.types";

export const AssetTag: React.FC<AssetTagProps> = ({
  type,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={[tagStyles.base, tagStyles[type], style]}>
      <Text style={textStyles[type]}>{type}</Text>
    </View>
  );
};


