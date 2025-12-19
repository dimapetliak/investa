export interface NetWorthCardProps {
  totalNetWorth: number;
  investmentsValue: number;
  savingsValue: number;
  investmentsPnL?: number;
  investmentsPnLPercent?: number;
  currency?: string;
  onPress?: () => void;
}

