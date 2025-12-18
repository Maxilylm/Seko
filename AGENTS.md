# AI Agents & Roles - Seko Web Development

> **IMPORTANT**: All AI assistants working on this project MUST read this file first before responding to any prompt.

## 📋 Project Context

**Project**: Seko - Dehydrated Products E-commerce Platform  
**Current Stack**: HTML/CSS/JS (transitioning to modern stack)  
**Target Stack**: 
- Frontend: React 18+ with TypeScript, deployed on Vercel
- Backend: Next.js API Routes / Node.js + Express (serverless functions on Vercel)
- Database: PostgreSQL (Vercel Postgres) or MongoDB Atlas
- Styling: Tailwind CSS + shadcn/ui components
- State Management: React Context API / Zustand for simple state, TanStack Query for server state

---

## 🤖 Agent Roles & Responsibilities

### 1. **ARCHITECT AGENT** 🏗️
**Role**: System Design & Technical Decisions  
**Invoke When**: Starting new features, making architectural changes, choosing tech stack

**Responsibilities**:
- Design system architecture and data models
- Make technology stack decisions aligned with Vercel best practices
- Define folder structure and project organization
- Create technical specifications and RFC documents
- Ensure scalability, performance, and security considerations
- Review and approve major architectural changes

**Key Guidelines**:
- Always prefer Vercel-native solutions (API Routes, Edge Functions, Vercel Postgres)
- Use serverless architecture patterns
- Implement ISR (Incremental Static Regeneration) for product pages
- Design for Core Web Vitals optimization
- Follow Next.js App Router conventions (app directory)

**Decision Framework**:
```
1. Evaluate requirement
2. Research Vercel/Next.js best practices
3. Consider performance implications
4. Design scalable solution
5. Document decision with rationale
```

---

### 2. **FRONTEND AGENT** 💻
**Role**: React/Next.js Development & UI Implementation  
**Invoke When**: Building UI components, pages, client-side logic

**Responsibilities**:
- Implement React components with TypeScript
- Build responsive, accessible UI using Tailwind CSS
- Integrate shadcn/ui components
- Implement client-side routing and navigation
- Handle form validation and user interactions
- Optimize bundle size and performance
- Implement SEO best practices

**Tech Stack**:
- React 18+ with TypeScript
- Next.js 14+ (App Router)
- Tailwind CSS + shadcn/ui
- React Hook Form + Zod for forms
- TanStack Query for data fetching
- Framer Motion for animations

**Code Standards**:
```typescript
// Component structure
'use client' // Only when needed (client components)

import { ComponentProps } from '@/types'
import { cn } from '@/lib/utils'

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    <div className="flex flex-col gap-4">
      {/* JSX */}
    </div>
  )
}
```

**File Organization**:
```
app/
├── (marketing)/          # Marketing pages group
│   ├── page.tsx         # Home page
│   ├── productos/       # Products pages
│   └── nosotros/        # About pages
├── (shop)/              # E-commerce group
│   ├── carrito/         # Cart
│   └── checkout/        # Checkout flow
├── api/                 # API routes
├── layout.tsx           # Root layout
└── globals.css          # Global styles

components/
├── ui/                  # shadcn/ui components
├── marketing/           # Marketing components
├── shop/                # E-commerce components
└── shared/              # Shared components
```

**Performance Checklist**:
- [ ] Use Next.js Image component for all images
- [ ] Implement proper loading states
- [ ] Use dynamic imports for heavy components
- [ ] Minimize client components (prefer server components)
- [ ] Implement proper error boundaries

---

### 3. **BACKEND AGENT** ⚙️
**Role**: API Development & Server-Side Logic  
**Invoke When**: Creating APIs, database operations, server-side logic

**Responsibilities**:
- Develop Next.js API Routes and Server Actions
- Implement database queries and ORM operations
- Create authentication and authorization logic
- Build integrations with third-party services
- Handle file uploads and processing
- Implement caching strategies
- Ensure API security and rate limiting

**Tech Stack**:
- Next.js API Routes (serverless)
- Vercel Postgres + Drizzle ORM (or Prisma)
- NextAuth.js for authentication
- Zod for validation
- Vercel Blob for file storage
- Resend for transactional emails

**API Structure**:
```typescript
// app/api/productos/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { productSchema } from '@/lib/validations'

export async function GET(req: NextRequest) {
  try {
    const products = await db.query.products.findMany()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export const runtime = 'edge' // Use edge runtime when possible
```

**Server Actions Example**:
```typescript
// app/actions/product.ts
'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db'

export async function createProduct(formData: FormData) {
  // Validate and process
  const result = await db.insert(products).values(data)
  revalidatePath('/productos')
  return { success: true }
}
```

**Database Schema Best Practices**:
- Use Drizzle ORM for type-safe queries
- Implement proper indexes
- Use transactions for complex operations
- Implement soft deletes for important data
- Use UUID for primary keys

---

### 4. **DATABASE AGENT** 🗄️
**Role**: Data Modeling & Database Management  
**Invoke When**: Designing schemas, migrations, query optimization

**Responsibilities**:
- Design database schemas and relationships
- Create and manage migrations
- Optimize queries and indexes
- Implement data validation rules
- Design caching strategies
- Ensure data integrity and consistency

**Schema Example**:
```typescript
// lib/db/schema.ts
import { pgTable, uuid, varchar, text, timestamp, decimal } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  category: varchar('category', { length: 100 }),
  imageUrl: text('image_url'),
  stock: integer('stock').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  status: varchar('status', { length: 50 }).notNull(),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
```

---

### 5. **DEVOPS AGENT** 🚀
**Role**: Deployment, CI/CD, Monitoring  
**Invoke When**: Setting up deployment, configuring environments, monitoring

**Responsibilities**:
- Configure Vercel deployment settings
- Set up environment variables
- Implement CI/CD pipelines (GitHub Actions)
- Configure domain and DNS
- Set up monitoring and analytics
- Implement error tracking (Sentry)
- Configure preview deployments

**Vercel Configuration**:
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  },
  "headers": [
    {
      "source": "/api/:path*",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" }
      ]
    }
  ]
}
```

**Environment Variables**:
```bash
# .env.local
DATABASE_URL="postgres://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
RESEND_API_KEY="..."
BLOB_READ_WRITE_TOKEN="..."
```

**GitHub Actions CI/CD**:
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
```

---

### 6. **TESTING AGENT** 🧪
**Role**: Quality Assurance & Testing  
**Invoke When**: Writing tests, ensuring code quality

**Responsibilities**:
- Write unit tests (Vitest)
- Write integration tests
- Write E2E tests (Playwright)
- Ensure accessibility compliance
- Perform visual regression testing
- Test responsive designs
- Validate form behaviors

**Testing Stack**:
- Vitest for unit/integration tests
- React Testing Library
- Playwright for E2E tests
- axe-core for accessibility testing

**Test Examples**:
```typescript
// components/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../ProductCard'

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const product = {
      name: 'Limón Deshidratado',
      price: 299,
      imageUrl: '/assets/limon.jpg'
    }
    render(<ProductCard product={product} />)
    expect(screen.getByText('Limón Deshidratado')).toBeInTheDocument()
  })
})
```

---

### 7. **UX/UI AGENT** 🎨
**Role**: User Experience & Design Implementation  
**Invoke When**: Designing interfaces, improving UX, accessibility

**Responsibilities**:
- Design user flows and wireframes
- Implement responsive designs
- Ensure accessibility (WCAG 2.1 AA)
- Create consistent design system
- Optimize user interactions
- Implement loading states and error messages
- Design mobile-first experiences

**Design Principles**:
1. **Mobile-First**: Design for mobile, enhance for desktop
2. **Accessibility**: WCAG 2.1 AA compliance minimum
3. **Performance**: Fast, responsive interactions
4. **Consistency**: Use design tokens and shadcn/ui
5. **Feedback**: Clear loading, error, and success states

**Design Tokens**:
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#8B4513',
          cream: '#FFF8DC',
          warm: '#F5E6D3',
        }
      }
    }
  }
}
```

---

### 8. **SECURITY AGENT** 🔒
**Role**: Security & Compliance  
**Invoke When**: Implementing auth, handling sensitive data, reviewing security

**Responsibilities**:
- Implement authentication and authorization
- Secure API endpoints
- Validate and sanitize user input
- Implement CSRF protection
- Configure secure headers
- Handle sensitive data securely
- Implement rate limiting

**Security Checklist**:
- [ ] Use NextAuth.js for authentication
- [ ] Validate all inputs with Zod
- [ ] Implement CSRF protection
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting on API routes
- [ ] Secure API routes with middleware
- [ ] Use HTTPS only
- [ ] Implement proper CORS policies

**Auth Implementation**:
```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

---

### 9. **CONTENT AGENT** 📝
**Role**: SEO, Content Management, i18n  
**Invoke When**: Managing content, implementing SEO, internationalization

**Responsibilities**:
- Implement SEO best practices
- Create metadata for pages
- Implement structured data (JSON-LD)
- Manage content strategies
- Implement internationalization (i18n)
- Optimize content for Core Web Vitals
- Create sitemaps and robots.txt

**SEO Implementation**:
```typescript
// app/productos/[slug]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  
  return {
    title: `${product.name} - Seko`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  }
}
```

**Structured Data**:
```typescript
// components/ProductStructuredData.tsx
export function ProductStructuredData({ product }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'ARS',
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

---

## 🔄 Agent Collaboration Workflow

### Standard Development Flow:

1. **ARCHITECT AGENT**: Reviews request, designs solution, creates technical spec
2. **DATABASE AGENT**: Designs schema if needed, creates migrations
3. **BACKEND AGENT**: Implements API routes and server logic
4. **FRONTEND AGENT**: Builds UI components and pages
5. **UX/UI AGENT**: Reviews design, ensures accessibility
6. **SECURITY AGENT**: Reviews for security concerns
7. **TESTING AGENT**: Writes tests and validates functionality
8. **CONTENT AGENT**: Implements SEO and content strategy
9. **DEVOPS AGENT**: Deploys and monitors

### Agent Selection Guide:

**For New Features**:
```
1. Start with ARCHITECT AGENT (design)
2. DATABASE AGENT (if data changes needed)
3. BACKEND AGENT (API implementation)
4. FRONTEND AGENT (UI implementation)
5. TESTING AGENT (validation)
6. DEVOPS AGENT (deployment)
```

**For Bug Fixes**:
```
1. Identify affected layer
2. Invoke relevant agent (Frontend/Backend/Database)
3. TESTING AGENT (regression tests)
```

**For UI Changes**:
```
1. UX/UI AGENT (design review)
2. FRONTEND AGENT (implementation)
3. TESTING AGENT (visual regression)
```

---

## 📚 Best Practices & Conventions

### Code Style:
- Use TypeScript for all files
- Follow ESLint configuration
- Use Prettier for formatting
- Prefer functional components
- Use meaningful variable names in Spanish (for business domain) or English (for technical)

### Commit Messages:
```
feat: add product filtering
fix: resolve cart calculation bug
docs: update API documentation
style: format code with prettier
refactor: simplify checkout flow
test: add unit tests for ProductCard
chore: update dependencies
```

### Branch Strategy:
- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches
- `fix/*`: Bug fix branches
- `hotfix/*`: Production hotfixes

### File Naming:
- Components: `PascalCase.tsx` (e.g., `ProductCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatPrice.ts`)
- Pages: `kebab-case` folders (e.g., `app/productos/page.tsx`)
- Tests: `*.test.tsx` or `*.spec.tsx`

---

## 🎯 Project-Specific Context

### Business Domain:
- **Product**: Seko specializes in dehydrated fruits and vegetables
- **Current Products**: Limón, Manzana, Naranja, Pomelo deshidratados
- **Target Market**: Argentine consumers looking for healthy snacks
- **Currency**: Argentine Peso (ARS)

### Key Features to Implement:
1. **Product Catalog**: Browsable product grid with filtering
2. **Product Details**: Individual product pages with rich information
3. **Shopping Cart**: Add to cart, update quantities, checkout
4. **Contact Form**: Customer inquiries (integrated with Resend)
5. **About Page**: Company story and values
6. **Admin Panel**: Product management (protected routes)

### Performance Targets:
- Lighthouse Score: >90 for all metrics
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1
- Mobile-friendly (responsive design)

---

## 🚨 Critical Rules

1. **ALWAYS** check this file first before responding to any prompt
2. **NEVER** use client-side JavaScript when Server Components can be used
3. **ALWAYS** implement proper TypeScript types
4. **NEVER** commit sensitive data or API keys
5. **ALWAYS** follow Vercel and Next.js best practices
6. **NEVER** bypass validation or security measures
7. **ALWAYS** write tests for new features
8. **ALWAYS** consider mobile experience first
9. **NEVER** make breaking changes without approval
10. **ALWAYS** document significant decisions

---

## 📖 Quick Reference

### Useful Commands:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
npm run test         # Run tests
npm run test:e2e     # Run E2E tests
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
```

### Important Links:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Drizzle ORM](https://orm.drizzle.team)

---

## 🔄 Version History

**Version 1.0** - Initial agent roles and responsibilities defined  
**Last Updated**: December 18, 2025

---

*This document should be reviewed and updated as the project evolves and new patterns emerge.*

