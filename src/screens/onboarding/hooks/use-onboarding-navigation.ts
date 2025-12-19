import { useOnboarding } from '@/hooks';
import { STORAGE_KEYS, storageHelpers } from '@/lib/storage';
import { router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { ONBOARDING_STEPS } from '../constants';

export type UseOnboardingNavigationReturn = {
  currentStep: number;
  faceIdEnabled: boolean;
  isTransitioning: boolean;
  isLastStep: boolean;
  step: typeof ONBOARDING_STEPS[number];
  progress: ReturnType<typeof useSharedValue<number>>;
  handleNext: () => void;
  handleBack: () => void;
  handleSkip: () => void;
  handleToggleFaceId: () => void;
};

export const useOnboardingNavigation = (): UseOnboardingNavigationReturn => {
  const [currentStep, setCurrentStep] = useState(0);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { completeOnboarding } = useOnboarding();

  const step = ONBOARDING_STEPS[currentStep];
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;

  // Shared values for animations
  const progress = useSharedValue((currentStep + 1) / ONBOARDING_STEPS.length);

  // Update progress animation
  useEffect(() => {
    progress.value = withTiming((currentStep + 1) / ONBOARDING_STEPS.length, { 
      duration: 400, 
      easing: Easing.out(Easing.cubic) 
    });
  }, [currentStep]);

  const handleFinish = useCallback(() => {
    const preferences = {
      currency: 'USD',
      faceIdEnabled,
    };
    storageHelpers.setItem(STORAGE_KEYS.USER_PREFERENCES, preferences);
    completeOnboarding();
    router.replace('/(tabs)');
  }, [faceIdEnabled, completeOnboarding]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    
    if (isLastStep) {
      handleFinish();
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsTransitioning(false);
      }, 100);
    }
  }, [isTransitioning, isLastStep, handleFinish]);

  const handleBack = useCallback(() => {
    if (isTransitioning || currentStep === 0) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep((prev) => prev - 1);
      setIsTransitioning(false);
    }, 100);
  }, [isTransitioning, currentStep]);

  const handleSkip = useCallback(() => {
    handleFinish();
  }, [handleFinish]);

  const handleToggleFaceId = useCallback(() => {
    setFaceIdEnabled((prev) => !prev);
  }, []);

  return {
    currentStep,
    faceIdEnabled,
    isTransitioning,
    isLastStep,
    step,
    progress,
    handleNext,
    handleBack,
    handleSkip,
    handleToggleFaceId,
  };
};

