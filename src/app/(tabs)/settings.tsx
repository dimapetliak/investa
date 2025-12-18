import { SettingsScreen } from '@/screens/settings';
import { useAssetsStore, useTradesStore } from '@/store';
import { storageHelpers } from '@/lib/storage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export default function SettingsRoute() {
  const clearAssets = useAssetsStore((state) => state.clearAssets);
  const clearTrades = useTradesStore((state) => state.clearTrades);
  const assets = useAssetsStore((state) => state.assets);
  const trades = useTradesStore((state) => state.trades);

  const [baseCurrency, setBaseCurrency] = useState('USD');

  const handleCurrencyChange = (currency: string) => {
    setBaseCurrency(currency);
    // TODO: Implement currency conversion logic
  };

  const handleExportData = () => {
    const data = {
      assets,
      trades,
      exportedAt: new Date().toISOString(),
    };

    // TODO: Implement actual file export (CSV/JSON)
    console.log('Export data:', JSON.stringify(data, null, 2));
    Alert.alert('Export', 'Data export functionality will be implemented soon');
  };

  const handleImportData = () => {
    // TODO: Implement CSV import
    Alert.alert('Import', 'CSV import functionality will be implemented soon');
  };

  const handleClearAllData = () => {
    Alert.alert(
      'Clear All Data',
      'This will permanently delete all your assets and trades. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete Everything',
          style: 'destructive',
          onPress: () => {
            clearAssets();
            clearTrades();
            storageHelpers.clearAll();
            Alert.alert('Success', 'All data has been cleared');
          },
        },
      ]
    );
  };

  const stats = {
    assetsCount: assets.length,
    tradesCount: trades.length,
  };

  return (
    <SettingsScreen
      baseCurrency={baseCurrency}
      onCurrencyChange={handleCurrencyChange}
      onExportData={handleExportData}
      onImportData={handleImportData}
      onClearAllData={handleClearAllData}
      stats={stats}
    />
  );
}
