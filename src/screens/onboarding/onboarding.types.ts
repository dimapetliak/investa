import { Ionicons } from '@expo/vector-icons';

export type OnboardingStep = {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  title: string;
  description: string;
  gradient: readonly [string, string];
};

export type OnboardingScreenProps = {
  onComplete?: () => void;
};


