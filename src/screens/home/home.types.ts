import type { HomeData } from './hooks';

export interface HomeScreenProps {
  /** User name for greeting */
  userName?: string;
  /** Notification count for badge */
  notificationCount?: number;
  /** Home data (net worth, investments, savings, activity) */
  data: HomeData;
  
  // Navigation callbacks
  onNotificationPress?: () => void;
  onViewInvestments?: () => void;
  onViewSavings?: () => void;
  onViewSavingsGoal?: (id: string) => void;
  onViewActivity?: (id: string) => void;
  onAddSavingsGoal?: () => void;
}

