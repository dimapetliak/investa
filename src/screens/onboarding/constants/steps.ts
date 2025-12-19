import { OnboardingStep } from '../onboarding.types';

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 1,
    icon: 'rocket-outline',
    iconColor: '#3b82f6',
    title: 'Welcome to Investa',
    description: 'Your personal investment tracker. Track stocks, crypto, and more — all in one beautiful app.',
    gradient: ['#3b82f6', '#8b5cf6'] as const,
  },
  {
    id: 2,
    icon: 'trending-up-outline',
    iconColor: '#10b981',
    title: 'Track Your Portfolio',
    description: 'Add your investments and watch them grow. Real-time updates keep you informed about your positions.',
    gradient: ['#10b981', '#14b8a6'] as const,
  },
  {
    id: 3,
    icon: 'analytics-outline',
    iconColor: '#8b5cf6',
    title: 'Powerful Insights',
    description: 'Get detailed analytics on your performance. Understand your gains, losses, and make informed decisions.',
    gradient: ['#8b5cf6', '#ec4899'] as const,
  },
  {
    id: 4,
    icon: 'shield-outline',
    iconColor: '#f59e0b',
    title: 'Secure & Private',
    description: 'Your data stays on your device. Enable Face ID for quick and secure access to your portfolio.',
    gradient: ['#f59e0b', '#ef4444'] as const,
  },
];

