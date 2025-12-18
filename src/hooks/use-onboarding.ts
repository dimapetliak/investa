import { useEffect, useState } from 'react';
import { STORAGE_KEYS, storageHelpers } from '@/lib/storage';

export const useOnboarding = () => {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkOnboardingStatus = () => {
      try {
        const completed = storageHelpers.getItem<boolean>(STORAGE_KEYS.ONBOARDING_COMPLETED);
        setIsOnboardingCompleted(completed ?? false);
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setIsOnboardingCompleted(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkOnboardingStatus();
  }, []);

  const completeOnboarding = () => {
    try {
      storageHelpers.setItem(STORAGE_KEYS.ONBOARDING_COMPLETED, true);
      setIsOnboardingCompleted(true);
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  return {
    isOnboardingCompleted,
    isLoading,
    completeOnboarding,
  };
};
