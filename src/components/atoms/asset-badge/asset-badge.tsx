import { Spacing } from '@/theme';
import { AssetColors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Text } from '../text';
import { styles } from './asset-badge.styles';
import type { AssetBadgeProps, AssetType } from './asset-badge.types';

const assetConfig: Record<AssetType, { icon: keyof typeof Ionicons.glyphMap; label: string }> = {
  cash: { icon: 'cash-outline', label: 'Cash' },
  bank: { icon: 'business-outline', label: 'Bank' },
  card: { icon: 'card-outline', label: 'Card' },
  savings: { icon: 'wallet-outline', label: 'Savings' },
  stock: { icon: 'trending-up-outline', label: 'Stock' },
  crypto: { icon: 'logo-bitcoin', label: 'Crypto' },
};

export const AssetBadge: React.FC<AssetBadgeProps> = ({
  type,
  showLabel = true,
  size = 'md',
  style,
  ...props
}) => {
  const config = assetConfig[type];
  const color = AssetColors[type];

  const iconSize = size === 'sm' ? 14 : 16;
  const paddingHorizontal = size === 'sm' ? Spacing.xs : Spacing.sm;
  const paddingVertical = size === 'sm' ? 2 : 4;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: `${color}20`,
          paddingHorizontal,
          paddingVertical,
        },
        style,
      ]}
      {...props}
    >
      <Ionicons name={config.icon} size={iconSize} color={color} />
      {showLabel && (
        <Text
          variant={size === 'sm' ? 'small' : 'caption'}
          weight="medium"
          style={[styles.label, { color }]}
        >
          {config.label}
        </Text>
      )}
    </View>
  );
};

export type { AssetBadgeProps, AssetType } from './asset-badge.types';

