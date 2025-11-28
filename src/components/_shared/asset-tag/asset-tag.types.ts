import { ViewProps } from 'react-native';

export type AssetType = 'stock' | 'crypto';

export type AssetTagProps = ViewProps & {
  type: AssetType;
};

