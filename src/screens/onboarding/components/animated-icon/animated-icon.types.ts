import { Ionicons } from '@expo/vector-icons';

export type AnimatedIconProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  isActive: boolean;
  size?: number;
};

