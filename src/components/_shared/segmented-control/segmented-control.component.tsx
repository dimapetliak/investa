import { Colors } from '@/theme/colors';
import { Fonts } from '@/theme/fonts';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './segmented-control.styles';
import { SegmentedControlProps } from './segmented-control.types';

export const SegmentedControl = ({
  options,
  selectedValue,
  onValueChange,
  style,
}: SegmentedControlProps) => {
  return (
    <View style={[styles.container, style]}>
      {options.map((option, index) => {
        const isSelected = selectedValue === option.value;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        return (
          <Pressable
            key={option.value}
            onPress={() => onValueChange(option.value)}
            style={({ pressed }) => [
              styles.segment,
              isFirst && styles.segmentFirst,
              isLast && styles.segmentLast,
              isSelected && styles.segmentSelected,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Text
              variant="body"
              style={[
                styles.segmentText,
                isSelected && { color: Colors.primary, fontFamily: Fonts.semiBold },
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

