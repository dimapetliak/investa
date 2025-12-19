import { ViewProps } from 'react-native';

export type AssetType = 'cash' | 'bank' | 'card' | 'savings' | 'stock' | 'crypto';

export type AssetBadgeProps = ViewProps & {
  type: AssetType;
  showLabel?: boolean;
  size?: 'sm' | 'md';
};

