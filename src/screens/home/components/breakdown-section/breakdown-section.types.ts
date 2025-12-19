export interface BreakdownItem {
  label: string;
  amount: number;
  description: string;
  icon: string;
  color: 'primary' | 'purple' | 'lime' | 'success';
}

export interface BreakdownSectionProps {
  accountsValue: number;
  investmentsValue: number;
  savingsValue: number;
  currency?: string;
}

