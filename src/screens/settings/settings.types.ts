export interface SettingsScreenProps {
  baseCurrency: string;
  onCurrencyChange: (currency: string) => void;
  onExportData: () => void;
  onImportData: () => void;
  onLoadSampleData: () => void;
  onClearAllData: () => void;
  stats: {
    assetsCount: number;
    tradesCount: number;
  };
}
