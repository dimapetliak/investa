import type { CreateAssetInput, CreateTradeInput } from '@/types';

export interface SamplePosition {
  asset: CreateAssetInput;
  trade: Omit<CreateTradeInput, 'assetId'>;
}

/**
 * Sample IBKR portfolio data for testing
 * Based on actual IBKR Open Positions export
 */
export const SAMPLE_IBKR_POSITIONS: SamplePosition[] = [
  {
    asset: {
      type: 'stock',
      ticker: 'AMD',
      name: 'ADVANCED MICRO DEVICES',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 4.5,
      price: 230.073903556,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'AMZN',
      name: 'AMAZON.COM INC',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 7.5,
      price: 230.973014667,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'GOOGL',
      name: 'ALPHABET INC-CL A',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 23.3,
      price: 273.991388498,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'HIMS',
      name: 'HIMS & HERS HEALTH INC',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 35,
      price: 44.042584,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'IBKR',
      name: 'INTERACTIVE BROKERS GRO-CL A',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 3.0257,
      price: 63.791749678,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'NVDA',
      name: 'NVIDIA CORP',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 30,
      price: 180.974683533,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'SCHD',
      name: 'SCHWAB US DVD EQUITY ETF',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 188,
      price: 27.245763404,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
  {
    asset: {
      type: 'stock',
      ticker: 'UBER',
      name: 'UBER TECHNOLOGIES INC',
      currency: 'USD',
    },
    trade: {
      type: 'buy',
      quantity: 5.5,
      price: 86.813636364,
      timestamp: '2024-12-17T12:00:00Z',
      comment: 'Imported from IBKR sample data',
    },
  },
];

