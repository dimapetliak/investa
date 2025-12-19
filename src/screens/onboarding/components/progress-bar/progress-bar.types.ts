import { SharedValue } from 'react-native-reanimated';

export type OnboardingProgressBarProps = {
  progress: SharedValue<number>;
  currentStep: number;
  totalSteps: number;
};


