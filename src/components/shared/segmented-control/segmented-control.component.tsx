import React from "react";
import { Pressable, View } from "react-native";
import { Text } from "../text/text.component";
import { containerStyles, segmentStyles, textStyles } from "./segmented-control.styles";
import type { SegmentedControlProps } from "./segmented-control.types";

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selectedIndex,
  onSelect,
  style,
  ...rest
}) => {
  return (
    <View {...rest} style={[containerStyles.base, style]}>
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;
        return (
          <Pressable
            key={index}
            onPress={() => onSelect(index)}
            style={({ pressed }) => [
              segmentStyles.base,
              isSelected && segmentStyles.active,
              pressed && !isSelected && { opacity: 0.7 },
            ]}
          >
            <Text style={[textStyles.base, isSelected && textStyles.active]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

