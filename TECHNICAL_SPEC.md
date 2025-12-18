# Technical Specification - Seko Platform Refactor

## 🎯 Overview
Complete refactor of Seko from static HTML/CSS/JS to a modern full-stack application with web (Next.js) and mobile (React Native) platforms.

## 📐 Architecture Decision

### Web Application
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand for cart, TanStack Query for server state
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel

### Mobile Application
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind for React Native)
- **State Management**: Shared Zustand store with web
- **Deployment**: Expo EAS

### Backend
- **API**: Next.js API Routes (serverless)
- **Database**: Vercel Postgres + Drizzle ORM
- **Email**: Resend for contact form
- **File Storage**: Vercel Blob for product images
- **Runtime**: Edge Runtime where possible

## 🗂️ Project Structure

```
Seko/
├── web/                          # Next.js web application
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx         # Home
│   │   │   ├── productos/
│   │   │   │   ├── page.tsx     # Products list
│   │   │   │   └── [slug]/page.tsx  # Product detail
│   │   │   ├── nosotros/page.tsx    # About
│   │   │   └── contacto/page.tsx    # Contact
│   │   ├── (shop)/
│   │   │   ├── carrito/page.tsx     # Cart
│   │   │   └── checkout/page.tsx    # Checkout
│   │   ├── api/
│   │   │   ├── productos/route.ts
│   │   │   ├── contacto/route.ts
│   │   │   └── checkout/route.ts
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── marketing/           # Hero, Features, etc
│   │   ├── shop/                # ProductCard, Cart, etc
│   │   └── shared/              # Header, Footer, etc
│   ├── lib/
│   │   ├── db/
│   │   │   ├── schema.ts
│   │   │   └── index.ts
│   │   ├── validations/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types/
│   ├── store/                   # Zustand stores
│   ├── public/
│   │   └── assets/              # Images
│   └── package.json
│
├── mobile/                       # React Native mobile app
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── index.tsx        # Home tab
│   │   │   ├── productos.tsx    # Products tab
│   │   │   ├── carrito.tsx      # Cart tab
│   │   │   └── perfil.tsx       # Profile tab
│   │   ├── producto/[id].tsx    # Product detail
│   │   └── _layout.tsx
│   ├── components/
│   ├── lib/
│   ├── store/                   # Shared Zustand store
│   └── package.json
│
├── packages/                     # Shared packages (monorepo)
│   └── shared/
│       ├── types/
│       ├── store/
│       └── utils/
│
├── webSeko/                      # Legacy code (keep for reference)
├── AGENTS.md
├── TECHNICAL_SPEC.md
└── README.md
```

## 🗄️ Database Schema

### Products Table
```typescript
{
  id: UUID (PK)
  slug: string (unique)
  name: string
  description: text
  price: decimal
  category: string
  imageUrl: string
  images: string[] (array)
  stock: integer
  weight: string (e.g., "100g")
  benefits: string[]
  isActive: boolean
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Orders Table
```typescript
{
  id: UUID (PK)
  orderNumber: string (unique)
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: json
  items: json[]
  subtotal: decimal
  shipping: decimal
  total: decimal
  status: enum
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Contact Messages Table
```typescript
{
  id: UUID (PK)
  name: string
  email: string
  message: text
  status: enum
  createdAt: timestamp
}
```

## 🎨 Design System

### Brand Colors
```typescript
colors: {
  brand: {
    brown: '#8B4513',
    brownDark: '#823720',
    brownLight: '#A0522D',
    accent: '#CD853F',
    cream: '#FFF8DC',
    warm: '#F5E6D3',
  }
}
```

### Typography
- Headings: Poppins (700, 600)
- Body: Poppins (400)
- Accent: Kalam (handwritten style)

## 🔐 Security Implementation

1. **Input Validation**: Zod schemas for all forms and API routes
2. **Rate Limiting**: Implement on contact form and checkout
3. **CORS**: Configure for API routes
4. **Environment Variables**: Secure storage of secrets
5. **HTTPS Only**: Force HTTPS in production

## 📱 Mobile-First Features

### Core Features (Phase 1)
- Product browsing with filtering
- Product detail with images gallery
- Shopping cart management
- Contact form
- About/company info

### Future Features (Phase 2)
- User authentication
- Order history
- Push notifications for offers
- Barcode scanner for products
- Offline mode with sync

## 🚀 Deployment Strategy

### Web (Vercel)
1. Connect GitHub repository
2. Configure environment variables
3. Set up Vercel Postgres
4. Configure Vercel Blob
5. Enable preview deployments
6. Set up custom domain

### Mobile (Expo EAS)
1. Configure Expo EAS
2. Set up Android build
3. Set up iOS build
4. Submit to stores

## 📊 Performance Targets

- Lighthouse Score: >90 all metrics
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1
- Mobile Performance Score: >85

## 🧪 Testing Strategy

1. **Unit Tests**: Vitest for components and utilities
2. **Integration Tests**: API routes testing
3. **E2E Tests**: Playwright for critical flows
4. **Accessibility**: axe-core automated testing
5. **Manual Testing**: Cross-browser, mobile devices

## 📦 Migration Plan

### Phase 1: Foundation (Week 1)
- Set up Next.js project
- Implement design system
- Create shared components
- Set up database

### Phase 2: Core Features (Week 2)
- Migrate all pages to Next.js
- Implement shopping cart
- Build API routes
- Add form validation

### Phase 3: Mobile App (Week 3)
- Set up React Native
- Implement core screens
- Connect to API
- Test on devices

### Phase 4: Polish & Deploy (Week 4)
- SEO optimization
- Performance tuning
- Security audit
- Deploy to production

## 🔄 API Endpoints

```
GET    /api/productos              # List all products
GET    /api/productos/[slug]       # Get product by slug
POST   /api/contacto               # Submit contact form
POST   /api/checkout               # Process order
GET    /api/health                 # Health check
```

## 📝 Environment Variables

```bash
# Database
DATABASE_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=

# Email
RESEND_API_KEY=

# Storage
BLOB_READ_WRITE_TOKEN=

# Analytics (optional)
NEXT_PUBLIC_GA_ID=

# Mobile API
NEXT_PUBLIC_API_URL=
```

## ✅ Success Criteria

1. All pages from original site recreated
2. Mobile app with feature parity
3. Shopping cart fully functional
4. Contact form working with email
5. Performance metrics met
6. Accessibility compliance (WCAG 2.1 AA)
7. SEO properly implemented
8. Deployed to production

---

**Approved by**: ARCHITECT AGENT  
**Date**: December 18, 2025  
**Version**: 1.0

