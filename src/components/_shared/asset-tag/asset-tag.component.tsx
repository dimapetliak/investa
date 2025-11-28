import { Fonts } from '@/theme/fonts';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text/text.component';
import { styles } from './asset-tag.styles';
import { AssetTagProps } from './asset-tag.types';

export const AssetTag = ({
  type,
  style,
}: AssetTagProps) => {
  const isStock = type === 'stock';
  
  return (
    <View
      style={[
        styles.tag,
        isStock ? styles.stock : styles.crypto,
        style,
      ]}
    >
      <Text
        variant="caption"
        style={[
          styles.tagText,
          { fontFamily: Fonts.medium },
        ]}
      >
        {isStock ? 'Stock' : 'Crypto'}
      </Text>
    </View>
  );
};

