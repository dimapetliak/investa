export type MetricCardChange = {
  value: string;
  isPositive: boolean;
};

export type MetricCardProps = {
  label: string;
  value: string;
  change?: MetricCardChange;
  icon?: React.ReactNode;
  onPress?: () => void;
};

