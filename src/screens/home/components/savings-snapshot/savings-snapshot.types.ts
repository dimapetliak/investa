import type { SavingsGoalSnapshot } from '../../hooks';

export interface SavingsSnapshotProps {
  goals: SavingsGoalSnapshot[];
  currency?: string;
  onAddGoal?: () => void;
  onViewGoal?: (id: string) => void;
  onViewAll?: () => void;
}

