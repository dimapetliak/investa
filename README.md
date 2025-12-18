# Investa - Personal Investment Tracker

A beautiful, offline-first mobile investment tracking application built with React Native and Expo. Track your stock and cryptocurrency portfolios with real-time calculations, cost basis tracking, and a modern shadcn/ui-inspired design system.

![React Native](https://img.shields.io/badge/React_Native-0.76.5-blue)
![Expo](https://img.shields.io/badge/Expo-54.0.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📱 Features

### Core Functionality
- **Portfolio Management**: Track unlimited stocks and cryptocurrency holdings
- **Trade Tracking**: Record buy/sell transactions with automatic cost basis calculation
- **Real-time Calculations**: Automatic P&L computation based on average buy price
- **Offline-First**: All data stored locally with MMKV for instant access
- **Multi-Asset Support**: Stocks and cryptocurrency with extensible asset types

### Design & UX
- **Modern UI**: shadcn/ui-inspired design system with consistent tokens
- **Dark Mode**: Full theme support (Light, Dark, System)
- **Responsive**: Optimized for all screen sizes and safe areas
- **Smooth Animations**: Native gestures and transitions
- **Type-Safe**: 100% TypeScript with strict type checking

### Data Features
- **Cost Basis Tracking**: Automatic average price calculation
- **Trade History**: Complete audit trail of all transactions
- **Portfolio Analytics**: Total value, cost, P&L, and percentage calculations
- **Data Export**: Export portfolio data (CSV/JSON planned)
- **Data Persistence**: MMKV for blazing-fast local storage

## 🏗️ Architecture

### Technology Stack

```
Frontend Framework:  React Native 0.76.5
Routing:            Expo Router 6.0.15 (File-based)
State Management:   Zustand 5.0.8
Local Storage:      react-native-mmkv 4.1.0
Type System:        TypeScript 5.3.3
UI Components:      Custom shadcn/ui-inspired design system
Navigation:         React Navigation with native stack
```

### Project Structure

```
investa/
├── src/
│   ├── app/                    # Expo Router pages (file-based routing)
│   │   ├── (tabs)/            # Tab navigator screens
│   │   │   ├── index.tsx      # Portfolio screen (home)
│   │   │   ├── assets.tsx     # Assets list screen
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
│   │   ├── _shared/          # Design system primitives
│   │   │   ├── badge/        # Badge component
│   │   │   ├── button/       # Button with variants
│   │   │   ├── card/         # Card container
│   │   │   ├── input/        # Form input
│   │   │   ├── separator/    # Divider line
│   │   │   ├── text/         # Typography component
│   │   │   └── ...           # Other UI primitives
│   │   └── widgets/          # Complex composite components
│   │
│   ├── contexts/             # React Context providers
│   │   └── theme-context.tsx # Theme management (light/dark/system)
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── use-app-init.ts           # App initialization
│   │   ├── use-onboarding.ts         # Onboarding flow
│   │   ├── use-portfolio-init.ts     # Portfolio calculations
│   │   └── use-theme-colors.ts       # Theme color access
│   │
│   ├── lib/                  # Utility libraries
│   │   ├── storage.ts        # MMKV storage helpers
│   │   └── persistence.ts    # Zustand persistence middleware
│   │
│   ├── navigation/           # Navigation configuration
│   │   ├── stack-navigator/  # Stack navigator setup
│   │   └── tab-navigator/    # Bottom tab navigator
│   │
│   ├── screens/              # Screen components (presentation)
│   │   ├── portfolio/        # Portfolio screen logic
│   │   ├── assets/           # Assets screen logic
│   │   └── settings/         # Settings screen logic
│   │
│   ├── store/                # Zustand state management
│   │   ├── assets.store.ts   # Assets state + actions
│   │   ├── trades.store.ts   # Trades state + actions
│   │   └── portfolio.store.ts # Computed portfolio state
│   │
│   ├── theme/                # Design system tokens
│   │   ├── colors.ts         # Color palette (light/dark)
│   │   ├── spacing.ts        # Spacing scale
│   │   ├── fonts.ts          # Font families (Inter)
│   │   ├── tokens.ts         # Design tokens (radius, heights, etc.)
│   │   └── index.ts          # Theme exports
│   │
│   └── types/                # TypeScript type definitions
│       ├── asset.types.ts    # Asset domain types
│       ├── trade.types.ts    # Trade domain types
│       └── portfolio.types.ts # Portfolio computation types
│
├── android/                  # Native Android code
├── ios/                      # Native iOS code (generated)
├── assets/                   # Static assets (images, fonts)
└── app.json                  # Expo configuration
```

## 🎨 Design System

### Theme Architecture

The app uses a token-based design system inspired by shadcn/ui, with full dark mode support.

#### Color Palette

**Light Theme:**
```typescript
background: "#FFFFFF"
foreground: "#09090B"
primary: "#155DFC"
border: "#E4E4E7"
// + semantic colors for success, error, warning
```

**Dark Theme:**
```typescript
background: "#09090B"
foreground: "#FAFAFA"
primary: "#3B82F6"
border: "#27272A"
// + adjusted semantic colors
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

**Text:**
- `h1`, `h2`, `h3` - Headings
- `body` - Body text
- `caption`, `small` - Smaller text variants

## 💾 Data Architecture

### State Management (Zustand)

**Assets Store:**
```typescript
{
  assets: Asset[]
  addAsset: (asset: Asset) => void
  updateAsset: (id: string, updates: Partial<Asset>) => void
  removeAsset: (id: string) => void
  getAssetById: (id: string) => Asset | undefined
}
```

**Trades Store:**
```typescript
{
  trades: Trade[]
  addTrade: (trade: Trade) => void
  updateTrade: (id: string, updates: Partial<Trade>) => void
  removeTrade: (id: string) => void
  getTradesByAsset: (assetId: string) => Trade[]
}
```

**Portfolio Store (Computed):**
```typescript
{
  positions: Position[]      // Computed from assets + trades
  summary: PortfolioSummary  // Total value, cost, P&L
}
```

### Data Persistence

All stores automatically persist to MMKV storage using custom middleware:

```typescript
// Automatic sync to storage
persist(store, {
  name: 'assets-storage',
  storage: createMMKVStorage(),
})
```

### Data Flow

```
User Action → Store Action → State Update → MMKV Sync → UI Re-render
                                              ↓
                                         Portfolio
                                      Re-calculation
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

Portfolio values are computed reactively whenever assets or trades change:

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

### Component Structure

All components follow this pattern:

```typescript
// 1. Types file
export type ComponentProps = { ... }

// 2. Styles file (theme-aware)
export const getStyles = (colors) => StyleSheet.create({ ... })

// 3. Component file
export const Component = (props: ComponentProps) => {
  const { colors } = useTheme()
  const styles = getStyles(colors)
  // ...
}
```

### Store Pattern

```typescript
// Store definition
export const useStore = create<State>()(
  persist(
    (set, get) => ({
      // State
      items: [],

      // Actions
      addItem: (item) => set((state) => ({
        items: [...state.items, item]
      })),

      // Selectors
      getItemById: (id) => get().items.find(i => i.id === id)
    }),
    persistOptions
  )
)
```

### Navigation Pattern

```typescript
// In screen component
const router = useRouter()

// Navigate
router.push('/asset-details?id=123')

// Go back
router.back()

// Replace (no history)
router.replace('/onboarding')
```

## 🔐 Data Privacy

- **100% Local**: All data stored on device using MMKV
- **No Cloud**: No data sent to external servers
- **No Tracking**: No analytics or tracking
- **User Control**: Full data export and deletion capabilities

## 🚀 Performance

- **MMKV Storage**: 30x faster than AsyncStorage
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
  "build:android": "eas build --platform android",
  "build:ios": "eas build --platform ios"
}
```

## 🐛 Troubleshooting

### MMKV Errors in Expo Go

**Problem:** `Failed to get NitroModules`

**Solution:** MMKV v4 requires custom development build. Run `npx expo run:android` instead of using Expo Go.

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
- Storage powered by [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)

---

**Built with ❤️ and React Native**
