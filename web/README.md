# Seko Web App

Modern e-commerce platform for Seko dehydrated products, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 📦 Features

- ✅ Server-side rendering (SSR) and static generation (SSG)
- ✅ Responsive design (mobile-first)
- ✅ Shopping cart with persistent state
- ✅ Product catalog with filtering
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ TypeScript for type safety
- ✅ Accessible (WCAG 2.1 AA)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Seko/web
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
POSTGRES_URL=your_database_url
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
web/
├── app/                    # Next.js app directory
│   ├── (marketing)/       # Marketing pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── marketing/         # Marketing components
│   ├── shop/              # E-commerce components
│   └── shared/            # Shared components
├── lib/
│   ├── db/                # Database schema and client
│   ├── validations/       # Zod schemas
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # App constants
├── store/                 # Zustand stores
├── types/                 # TypeScript types
└── public/                # Static assets
```

## 🧪 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript types

# Database
npm run db:generate      # Generate migrations
npm run db:push          # Push schema to database
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy!

The app will automatically deploy on every push to `main`.

### Environment Variables

Required environment variables for production:

```env
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
RESEND_API_KEY=
BLOB_READ_WRITE_TOKEN=
NEXT_PUBLIC_APP_URL=
```

## 📄 License

Copyright © 2024 Seko. All rights reserved.

## 🤝 Support

For support, email deshidratadosseko@gmail.com or visit our contact page.

