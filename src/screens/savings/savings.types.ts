export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
  icon?: string;
}

export interface SavingsAccount {
  id: string;
  name: string;
  balance: number;
  currency: string;
  interestRate?: number;
}

export interface SavingsScreenProps {
  goals?: SavingsGoal[];
  accounts?: SavingsAccount[];
  onAddGoal?: () => void;
  onViewGoal?: (id: string) => void;
  onAddAccount?: () => void;
  onViewAccount?: (id: string) => void;
  /** Called when user taps settings/manage button */
  onManage?: () => void;
}

