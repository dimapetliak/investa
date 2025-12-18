import type { PortfolioFilter, PortfolioSummary, Position } from '@/types';
import { create } from 'zustand';
import { useAssetsStore } from './assets.store';
import { useTradesStore } from './trades.store';

interface PortfolioState {
  positions: Position[];
  summary: PortfolioSummary;
  computePortfolio: () => void;
  getPositionByAssetId: (assetId: string) => Position | undefined;
  getFilteredPositions: (filter: PortfolioFilter) => Position[];
}

const calculatePosition = (
  assetId: string,
  assets: ReturnType<typeof useAssetsStore.getState>['assets'],
  trades: ReturnType<typeof useTradesStore.getState>['trades']
): Position | null => {
  const asset = assets.find((a) => a.id === assetId);
  if (!asset) return null;

  const assetTrades = trades
    .filter((t) => t.assetId === assetId)
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  if (assetTrades.length === 0) return null;

  let totalQuantity = 0;
  let totalCost = 0;

  for (const trade of assetTrades) {
    const tradeCost = trade.quantity * trade.price + (trade.fee || 0);

    if (trade.type === 'buy') {
      totalQuantity += trade.quantity;
      totalCost += tradeCost;
    } else {
      // sell
      const avgCost = totalQuantity > 0 ? totalCost / totalQuantity : 0;
      totalQuantity -= trade.quantity;
      totalCost -= trade.quantity * avgCost;
    }
  }

  // If position is closed (quantity is 0 or negative), don't include it
  if (totalQuantity <= 0) {
    return null;
  }

  const avgBuyPrice = totalQuantity > 0 ? totalCost / totalQuantity : 0;

  // For now, currentValue = totalCost (no price data yet)
  const currentValue = totalCost;
  const pnl = currentValue - totalCost;
  const pnlPercent = totalCost > 0 ? (pnl / totalCost) * 100 : 0;

  return {
    asset,
    quantity: totalQuantity,
    avgBuyPrice,
    totalCost,
    currentValue,
    pnl,
    pnlPercent,
    trades: assetTrades,
  };
};

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  positions: [],
  summary: {
    totalValue: 0,
    totalCost: 0,
    totalPnL: 0,
    totalPnLPercent: 0,
    positionsCount: 0,
  },

  computePortfolio: () => {
    const assets = useAssetsStore.getState().assets;
    const trades = useTradesStore.getState().trades;

    // Get unique asset IDs from trades
    const assetIds = Array.from(new Set(trades.map((t) => t.assetId)));

    // Calculate positions for each asset
    const positions: Position[] = assetIds
      .map((assetId) => calculatePosition(assetId, assets, trades))
      .filter((p): p is Position => p !== null);

    // Calculate summary
    const totalValue = positions.reduce((sum, p) => sum + p.currentValue, 0);
    const totalCost = positions.reduce((sum, p) => sum + p.totalCost, 0);
    const totalPnL = totalValue - totalCost;
    const totalPnLPercent = totalCost > 0 ? (totalPnL / totalCost) * 100 : 0;

    set({
      positions,
      summary: {
        totalValue,
        totalCost,
        totalPnL,
        totalPnLPercent,
        positionsCount: positions.length,
      },
    });
  },

  getPositionByAssetId: (assetId: string) => {
    return get().positions.find((p) => p.asset.id === assetId);
  },

  getFilteredPositions: (filter: PortfolioFilter) => {
    const { positions } = get();

    if (filter === 'all') {
      return positions;
    }

    return positions.filter((p) => p.asset.type === filter);
  },
}));
