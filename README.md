# Investa - Personal Investment Tracker

A beautiful, offline-first mobile investment tracking application built with React Native and Expo. Track your stock and cryptocurrency portfolios with real-time price fetching, cost basis tracking, and a modern shadcn/ui-inspired design system.

![React Native](https://img.shields.io/badge/React_Native-0.81.5-blue)
![Expo](https://img.shields.io/badge/Expo-54.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📱 Features

### Core Functionality
- **Portfolio Management**: Track unlimited stocks and cryptocurrency holdings
- **Trade Tracking**: Record buy/sell transactions with automatic cost basis calculation
- **Real-time Price Fetching**: Live prices from Yahoo Finance (stocks) and CoinGecko (crypto)
- **Offline-First**: All data stored locally with MMKV for instant access
- **Multi-Asset Support**: Stocks and cryptocurrency with extensible asset types

### Price Integration
- **Yahoo Finance**: Free stock quotes with real-time data
- **CoinGecko**: Cryptocurrency prices for 25+ major coins
- **Auto-Refresh**: Configurable intervals (1min, 5min, 15min, 1hour, or manual)
- **Offline Cache**: Prices cached locally for offline viewing
- **React Query**: Efficient data fetching with stale-while-revalidate

### Design & UX
- **Modern UI**: shadcn/ui-inspired design system with consistent tokens
- **Gradient Cards**: Beautiful gradient summary cards for Net Worth, Investments, and Savings
- **Dark Mode**: Full theme support (Light, Dark, System)
- **Responsive**: Optimized for all screen sizes and safe areas
- **Smooth Animations**: Native gestures and transitions
- **Type-Safe**: 100% TypeScript with strict type checking

### Data Features
- **Cost Basis Tracking**: Automatic average price calculation
- **Trade History**: Complete audit trail of all transactions
- **Portfolio Analytics**: Total value, cost, P&L, and percentage calculations
- **Data Export/Import**: Export portfolio data as JSON, import IBKR CSV or JSON backups
- **Data Persistence**: MMKV for blazing-fast local storage

## 🏗️ Architecture

### Technology Stack

```
Frontend Framework:  React Native 0.81.5
Routing:            Expo Router 6.0.15 (File-based)
State Management:   Zustand 5.0.8
Data Fetching:      TanStack React Query 5.90.11
Local Storage:      react-native-mmkv 4.1.0
Type System:        TypeScript 5.9.2
UI Components:      Custom shadcn/ui-inspired design system
Navigation:         React Navigation with native stack
Gradients:          expo-linear-gradient 15.0.7
```

### Project Structure

```
investa/
├── src/
│   ├── app/                    # Expo Router pages (file-based routing)
│   │   ├── (tabs)/            # Tab navigator screens
│   │   │   ├── index.tsx      # Home screen (Net Worth overview)
│   │   │   ├── assets.tsx     # Investments list screen
│   │   │   ├── savings.tsx    # Savings & Goals screen
│   │   │   └── settings.tsx   # Settings screen
│   │   ├── _layout.tsx        # Root layout with providers
│   │   ├── onboarding.tsx     # First-time user onboarding
│   │   ├── asset-details.tsx  # Asset detail view with trades
│   │   ├── add-asset.tsx      # Add new asset form
│   │   ├── edit-asset.tsx     # Edit asset form
│   │   ├── add-trade.tsx      # Add trade form
│   │   └── edit-trade.tsx     # Edit trade form
│   │
│   ├── components/            # Reusable UI components
│   │   ├── atoms/             # Design system primitives
│   │   │   ├── badge/         # Badge component
│   │   │   ├── button/        # Button with variants
│   │   │   ├── icon-badge/    # Icon with colored background
│   │   │   ├── change-badge/  # P&L change indicator
│   │   │   ├── text/          # Typography component
│   │   │   └── ...            # Other UI primitives
│   │   ├── molecules/         # Composite components
│   │   │   ├── card/          # Card container
│   │   │   ├── gradient-card/ # Gradient background card
│   │   │   ├── screen-header/ # Screen header with actions
│   │   │   ├── position-card/ # Portfolio position display
│   │   │   └── ...            # Other molecules
│   │   └── organisms/         # Complex widgets
│   │       ├── ScreenLayout.tsx
│   │       └── SearchFilterWidget.tsx
│   │
│   ├── contexts/              # React Context providers
│   │   └── theme-context.tsx  # Theme management (light/dark/system)
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-app-init.ts           # App initialization
│   │   ├── use-onboarding.ts         # Onboarding flow
│   │   ├── use-portfolio-init.ts     # Portfolio calculations
│   │   ├── use-prices.ts             # Price fetching hooks
│   │   ├── use-price-sync.ts         # Price store sync
│   │   └── use-theme-colors.ts       # Theme color access
│   │
│   ├── lib/                   # Utility libraries
│   │   ├── storage.ts         # MMKV storage helpers
│   │   ├── persistence.ts     # Zustand persistence middleware
│   │   ├── utils.ts           # Formatting utilities
│   │   └── id.ts              # ID generation
│   │
│   ├── providers/             # App-level providers
│   │   └── query-provider.tsx # React Query provider
│   │
│   ├── services/              # External API services
│   │   └── api/
│   │       ├── stock-api.ts   # Yahoo Finance integration
│   │       ├── crypto-api.ts  # CoinGecko integration
│   │       └── types.ts       # API type definitions
│   │
│   ├── screens/               # Screen components (presentation)
│   │   ├── home/              # Home screen with Net Worth
│   │   ├── assets/            # Investments screen
│   │   ├── savings/           # Savings & Goals screen
│   │   ├── settings/          # Settings screen
│   │   └── ...                # Other screens
│   │
│   ├── store/                 # Zustand state management
│   │   ├── assets.store.ts    # Assets state + actions
│   │   ├── trades.store.ts    # Trades state + actions
│   │   ├── portfolio.store.ts # Computed portfolio state
│   │   ├── prices.store.ts    # Price cache store
│   │   ├── settings.store.ts  # User settings
│   │   └── user.store.ts      # User profile
│   │
│   ├── theme/                 # Design system tokens
│   │   ├── colors.ts          # Color palette + gradients (light/dark)
│   │   ├── spacing.ts         # Spacing scale
│   │   ├── fonts.ts           # Font families (Inter)
│   │   ├── tokens.ts          # Design tokens (radius, heights, etc.)
│   │   └── index.ts           # Theme exports
│   │
│   └── types/                 # TypeScript type definitions
│       ├── asset.types.ts     # Asset domain types
│       ├── trade.types.ts     # Trade domain types
│       └── portfolio.types.ts # Portfolio computation types
│
├── android/                   # Native Android code
├── ios/                       # Native iOS code (generated)
├── assets/                    # Static assets (images, fonts)
└── app.json                   # Expo configuration
```

## 🎨 Design System

### Theme Architecture

The app uses a token-based design system inspired by shadcn/ui, with full dark mode support.

#### Color Palette

**Light Theme:**
```typescript
background: "#f8f9fa"
foreground: "#1f2937"
primary: "#3b82f6"
border: "#e5e7eb"
// + semantic colors for success, error, warning
```

**Dark Theme:**
```typescript
background: "#111827"
foreground: "#f9fafb"
primary: "#3b82f6"
border: "#374151"
// + adjusted semantic colors
```

#### Gradient Colors

```typescript
// Net Worth Card
light: ['#4f46e5', '#7c3aed']  // Deep indigo → purple
dark:  ['#3730a3', '#5b21b6']  // Darker variants

// Investments Card
light: ['#7c3aed', '#a855f7']  // Purple gradient
dark:  ['#6d28d9', '#7c3aed']

// Savings Card
light: ['#16a34a', '#22c55e']  // Green gradient
dark:  ['#15803d', '#16a34a']
```

#### Design Tokens

```typescript
// Spacing (4px grid)
Spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, 2xl: 24, ... }

// Border Radius
Radius: { sm: 8, md: 10, lg: 12, xl: 16 }

// Control Heights
ControlHeight: { sm: 36, md: 44, lg: 52 }

// Typography
Typography: {
  fontSize: { xs: 12, sm: 14, base: 16, lg: 18, ... }
  lineHeight: { xs: 16, sm: 20, base: 24, lg: 28, ... }
  fontWeight: { regular, medium, semiBold, bold }
}
```

### Component Variants

**Button:**
- `primary` - Blue background, white text
- `secondary` - Light gray background
- `outline` - Transparent with border
- `ghost` - Transparent, no border
- `destructive` - Red background for dangerous actions

**Card:**
- `default` - White/dark background with border
- `secondary` - Light gray background
- `info`, `error`, `warning`, `success` - Semantic variants

**GradientCard:**
- Custom gradient backgrounds for summary cards
- Theme-aware colors for light/dark mode

**Text:**
- `h1`, `h2`, `h3` - Headings
- `body` - Body text
- `caption`, `small` - Smaller text variants
- Supports `white` color for gradient backgrounds

## 📡 Price API Integration

### Supported APIs

**Yahoo Finance (Stocks):**
- Free API, no key required
- Real-time quotes with change data
- Includes market cap, volume, high/low

**CoinGecko (Crypto):**
- Free tier, no API key required
- 25+ major cryptocurrencies mapped
- Includes 24h change, market cap, volume

### Supported Cryptocurrencies

```
BTC, ETH, USDT, BNB, XRP, USDC, SOL, ADA, DOGE, TRX,
TON, DOT, MATIC, LTC, SHIB, AVAX, LINK, XLM, ATOM, UNI,
XMR, ETC, BCH, APT, FIL, NEAR, ARB, OP, PEPE
```

### Price Hooks

```typescript
// Fetch all portfolio asset prices
const { prices, isLoading, refetch } = useAssetPrices();

// Get single asset price
const { price, change, changePercent } = useAssetPrice('AAPL', 'stock');

// Sync prices to store and recompute portfolio
const { isFetching, refetch } = usePriceSync();

// Manual refresh trigger
const refreshPrices = useRefreshPrices();
```

### Auto-Refresh Settings

Configurable in Settings:
- `manual` - Refresh only on demand
- `1min` - Every minute
- `5min` - Every 5 minutes
- `15min` - Every 15 minutes
- `1hour` - Every hour

## 💾 Data Architecture

### State Management (Zustand)

**Assets Store:**
```typescript
{
  assets: Asset[]
  isHydrated: boolean
  addAsset: (input) => Asset
  updateAsset: (id, input) => void
  deleteAsset: (id) => void  // Cascades to delete related trades
}
```

**Trades Store:**
```typescript
{
  trades: Trade[]
  isHydrated: boolean
  addTrade: (input) => Trade
  updateTrade: (id, input) => void
  deleteTrade: (id) => void
  deleteTradesByAssetId: (id) => number  // Cascade delete support
}
```

**Prices Store:**
```typescript
{
  prices: Record<string, CachedPrice>
  lastGlobalUpdate: string | null
  setPrice: (symbol, price) => void
  setPrices: (prices) => void
  getPrice: (symbol) => CachedPrice | undefined
}
```

**Portfolio Store (Computed):**
```typescript
{
  positions: Position[]      // Computed from assets + trades + prices
  summary: PortfolioSummary  // Total value, cost, P&L
  computePortfolio: () => void  // Re-compute with latest prices
}
```

**Settings Store:**
```typescript
{
  baseCurrency: string
  priceRefreshInterval: 'manual' | '1min' | '5min' | '15min' | '1hour'
  stockPriceSource: 'yahoo' | 'alphavantage'
  cryptoPriceSource: 'coingecko' | 'binance'
  security: { useFaceId: boolean, usePin: boolean }
}
```

### Data Flow

```
App Start
    ↓
Hydrate Stores (MMKV)
    ↓
React Query fetches prices ──→ Price Store ──→ Portfolio Recalculation
    ↓                              ↓
UI Renders                    MMKV Cache (offline)
```

### Price Calculation Flow

```
1. User adds/edits trades
2. Portfolio store computes positions using:
   - Assets (ticker, type)
   - Trades (quantity, price)
   - Cached prices (current market price)
3. For each position:
   - avgBuyPrice = weighted average from trades
   - currentPrice = from price store or fallback to avgBuyPrice
   - currentValue = quantity × currentPrice
   - pnl = currentValue - totalCost
```

## 🔧 Development

### Prerequisites

- Node.js 18+ and npm
- iOS: Xcode 15+ and CocoaPods
- Android: Android Studio with SDK 24+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd investa

# Install dependencies
npm install

# Install iOS pods (macOS only)
cd ios && pod install && cd ..
```

### Running the App

**Development Build (Required for MMKV):**

```bash
# Android
npm run android

# iOS
npm run ios
```

**Note:** Expo Go is NOT supported due to native modules (MMKV, Nitro Modules). You must build a custom development client.

### Building for Production

```bash
# Create production build
eas build --platform android
eas build --platform ios

# Or local build
npm run build:android
npm run build:ios
```

## 📊 Key Features Explained

### Cost Basis Calculation

The app automatically tracks cost basis using weighted average method:

```typescript
// For BUY trades:
avgBuyPrice = (currentQty * avgPrice + newQty * newPrice) / totalQty

// For SELL trades:
// Uses current average buy price, updates quantity only
```

### Portfolio Computation

Portfolio values are computed reactively whenever assets, trades, or prices change:

```typescript
// Real-time calculations
totalValue = Σ(position.quantity * position.currentPrice)
totalCost = Σ(position.quantity * position.avgBuyPrice)
totalPnL = totalValue - totalCost
totalPnLPercent = (totalPnL / totalCost) * 100
```

### Theme Switching

Theme is persisted to MMKV and applied globally:

```typescript
// User can choose:
'light'  → Always light mode
'dark'   → Always dark mode
'system' → Follow device setting
```

## 🧪 Code Patterns

### ID Generation

All entities use UUID for unique identification:

```typescript
import { generateId } from '@/lib/id';

const id = generateId(); // UUID v4
```

### Component Structure

All components follow atomic design pattern:

```
atoms/      → Basic UI elements (Button, Text, Badge)
molecules/  → Composite components (Card, ListItem, ProgressBar)
organisms/  → Complex widgets (ScreenLayout, SearchFilterWidget)
```

### Hook Pattern for Screens

```typescript
// Separate data logic from presentation
const { data, isLoading, handlers } = useScreenData();

return <Screen data={data} {...handlers} />;
```

### Store Pattern

```typescript
export const useStore = create<State>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({
        items: [...state.items, item]
      })),
      getItemById: (id) => get().items.find(i => i.id === id)
    }),
    persistOptions
  )
)
```

## 🔐 Data Privacy

- **100% Local**: All data stored on device using MMKV
- **No Cloud**: No data sent to external servers (except price APIs)
- **No Tracking**: No analytics or tracking
- **User Control**: Full data export and deletion capabilities
- **Price APIs**: Only ticker symbols sent to Yahoo/CoinGecko (no personal data)

## 🚀 Performance

- **MMKV Storage**: 30x faster than AsyncStorage
- **React Query**: Smart caching, deduplication, background updates
- **Memoized Calculations**: Portfolio recomputes only when needed
- **Optimized Re-renders**: Zustand selectors prevent unnecessary updates
- **Native Navigation**: React Navigation with native stack
- **Lazy Loading**: Routes loaded on-demand with Expo Router

## 📝 Scripts

```json
{
  "start": "expo start",
  "android": "expo run:android",
  "ios": "expo run:ios",
  "prebuild": "expo prebuild --clean",
  "lint": "expo lint"
}
```

## 🐛 Troubleshooting

### MMKV Errors in Expo Go

**Problem:** `Failed to get NitroModules`

**Solution:** MMKV v4 requires custom development build. Run `npx expo run:android` instead of using Expo Go.

### Price Fetch Failures

**Problem:** Prices not loading

**Solution:**
- Check network connectivity
- CoinGecko has rate limits (10-30 calls/min for free tier)
- Yahoo Finance may block certain regions

### Android Build Issues

**Problem:** Gradle build fails

**Solution:**
```bash
cd android
./gradlew clean
cd ..
npx expo prebuild --clean
npm run android
```

### Theme Not Persisting

**Problem:** Theme resets on app restart

**Solution:** Check MMKV initialization in `storage.ts` and ensure ThemeProvider wraps the entire app.

## 📄 License

MIT License - feel free to use this project for learning or as a template for your own apps.

## 🙏 Acknowledgments

- Design inspiration from [shadcn/ui](https://ui.shadcn.com/)
- Built with [Expo](https://expo.dev/)
- State management by [Zustand](https://github.com/pmndrs/zustand)
- Data fetching by [TanStack Query](https://tanstack.com/query)
- Storage powered by [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)
- Stock data from [Yahoo Finance](https://finance.yahoo.com/)
- Crypto data from [CoinGecko](https://www.coingecko.com/)

---

**Built with ❤️ and React Native**
