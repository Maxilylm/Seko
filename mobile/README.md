# Seko Mobile App

React Native mobile application for Seko dehydrated products, built with Expo.

## 🚀 Tech Stack

- **Framework**: React Native + Expo
- **Router**: Expo Router
- **Language**: TypeScript
- **State Management**: Zustand (shared with web)
- **Styling**: React Native StyleSheet + NativeWind (Tailwind)

## 📦 Features

- ✅ Native iOS & Android support
- ✅ Tab-based navigation
- ✅ Product browsing and details
- ✅ Shopping cart
- ✅ Contact form
- ✅ Shared state with web app

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- For iOS: Xcode and iOS Simulator
- For Android: Android Studio and Android Emulator

### Installation

1. Navigate to mobile directory:
```bash
cd Seko/mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - **iOS**: Press `i` or run `npm run ios`
   - **Android**: Press `a` or run `npm run android`
   - **Web**: Press `w` or run `npm run web`

## 📁 Project Structure

```
mobile/
├── app/
│   ├── (tabs)/             # Tab screens
│   │   ├── index.tsx       # Home
│   │   ├── productos.tsx   # Products
│   │   ├── carrito.tsx     # Cart
│   │   └── perfil.tsx      # Profile
│   ├── producto/[id].tsx   # Product detail
│   └── _layout.tsx         # Root layout
├── components/             # Reusable components
├── lib/                    # Utilities and constants
├── store/                  # Zustand stores (shared)
└── app.json                # Expo configuration
```

## 🚢 Building for Production

### iOS

```bash
expo build:ios
```

### Android

```bash
expo build:android
```

### Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Configure EAS:
```bash
eas build:configure
```

3. Build:
```bash
eas build --platform ios
eas build --platform android
```

## 📱 Features Roadmap

### Phase 1 (Current)
- [x] Home screen
- [x] Product listing
- [x] Product details
- [x] Shopping cart
- [x] Tab navigation

### Phase 2
- [ ] User authentication
- [ ] Order history
- [ ] Push notifications
- [ ] Offline mode
- [ ] Barcode scanner

### Phase 3
- [ ] In-app payments
- [ ] Order tracking
- [ ] Favorites/Wishlist
- [ ] Reviews and ratings

## 🔗 API Integration

The mobile app connects to the same API as the web app:

```typescript
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api'
```

## 📄 License

Copyright © 2024 Seko. All rights reserved.

