import { AssetDetailsScreen } from '@/screens/asset-details';
import { useAssetsStore, usePortfolioStore, useTradesStore } from '@/store';
import { router, useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';

export default function AssetDetailsRoute() {
  const params = useLocalSearchParams();
  const assetId = params.id as string;

  const getAssetById = useAssetsStore((state) => state.getAssetById);
  const getPositionByAssetId = usePortfolioStore((state) => state.getPositionByAssetId);
  const getTradesByAssetId = useTradesStore((state) => state.getTradesByAssetId);
  const deleteTrade = useTradesStore((state) => state.deleteTrade);

  const asset = getAssetById(assetId);
  const position = getPositionByAssetId(assetId);
  const trades = getTradesByAssetId(assetId);

  // If asset doesn't exist, go back
  if (!asset) {
    router.back();
    return null;
  }

  // If no position exists, show minimal data
  const positionData = position
    ? {
        quantity: position.quantity,
        avgBuyPrice: position.avgBuyPrice,
        totalCost: position.totalCost,
        currentValue: position.currentValue,
        pnl: position.pnl,
        pnlPercent: position.pnlPercent,
      }
    : {
        quantity: 0,
        avgBuyPrice: 0,
        totalCost: 0,
        currentValue: 0,
        pnl: 0,
        pnlPercent: 0,
      };

  const handleAddTrade = () => {
    router.push(`/add-trade?assetId=${assetId}`);
  };

  const handleEditAsset = () => {
    router.push(`/edit-asset?id=${assetId}`);
  };

  const handleEditTrade = (tradeId: string) => {
    router.push(`/edit-trade?id=${tradeId}`);
  };

  const handleDeleteTrade = (tradeId: string) => {
    Alert.alert('Delete Trade', 'Are you sure you want to delete this trade?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteTrade(tradeId);
        },
      },
    ]);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <AssetDetailsScreen
      asset={asset}
      position={positionData}
      trades={trades}
      onAddTrade={handleAddTrade}
      onEditAsset={handleEditAsset}
      onEditTrade={handleEditTrade}
      onDeleteTrade={handleDeleteTrade}
      onBack={handleBack}
    />
  );
}
