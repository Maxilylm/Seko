# Migration Guide: HTML to Next.js + React Native

This guide explains how to migrate from the legacy HTML/CSS/JS site to the new React-based platform.

## 📋 Overview

**From**: Static HTML/CSS/JS website  
**To**: Next.js 14 (Web) + React Native (Mobile)

## 🗂️ Directory Structure

### Old Structure
```
webSeko/
├── index.html
├── styles.css
├── script.js
├── assets/
└── README.md
```

### New Structure
```
Seko/
├── web/                    # Next.js app
├── mobile/                 # React Native app
├── webSeko/                # Legacy code (keep for reference)
├── AGENTS.md
├── TECHNICAL_SPEC.md
└── MIGRATION_GUIDE.md
```

## 🔄 Feature Mapping

### Pages

| Old | New (Web) | New (Mobile) |
|-----|-----------|--------------|
| `index.html#inicio` | `app/page.tsx` | `app/(tabs)/index.tsx` |
| `index.html#productos` | `app/productos/page.tsx` | `app/(tabs)/productos.tsx` |
| `index.html#nosotros` | `app/nosotros/page.tsx` | Info in Profile tab |
| `index.html#contacto` | `app/contacto/page.tsx` | Contact form in Profile |
| N/A | `app/carrito/page.tsx` | `app/(tabs)/carrito.tsx` |
| N/A | `app/productos/[slug]/page.tsx` | `app/producto/[id].tsx` |

### Components

| Old HTML Section | New Component | Location |
|------------------|---------------|----------|
| Header/Nav | `Header.tsx` | `components/shared/Header.tsx` |
| Footer | `Footer.tsx` | `components/shared/Footer.tsx` |
| Hero | `Hero.tsx` | `components/marketing/Hero.tsx` |
| Benefits | `Benefits.tsx` | `components/marketing/Benefits.tsx` |
| Product Cards | `ProductCard.tsx` | `components/shop/ProductCard.tsx` |
| Contact Form | `ContactPage` | `app/contacto/page.tsx` |

### Styling

| Old | New |
|-----|-----|
| `styles.css` (CSS Variables) | Tailwind CSS + Custom Theme |
| Inline styles | Tailwind utility classes |
| `:root` variables | `tailwind.config.ts` theme |
| Media queries | Tailwind responsive classes |

### JavaScript Functionality

| Old Feature | New Implementation |
|-------------|-------------------|
| Menu toggle | React state in `Header.tsx` |
| Smooth scroll | CSS `scroll-behavior: smooth` |
| Form handling | React Hook Form + Zod validation |
| Cart (localStorage) | Zustand store with persistence |
| Scroll animations | Intersection Observer or Framer Motion |
| Image error handling | Next.js Image component |

## 🎨 Design Tokens Migration

### Colors
```css
/* Old (styles.css) */
--primary-color: #8B4513;
--logo-bg: #823720;
--logo-text: #FFF8DC;
--bg-warm: #F5E6D3;
```

```typescript
// New (tailwind.config.ts)
colors: {
  brand: {
    brown: '#8B4513',
    brownDark: '#823720',
    cream: '#FFF8DC',
    warm: '#F5E6D3',
  }
}
```

### Typography
```css
/* Old */
font-family: 'Poppins', sans-serif;
font-family: 'Kalam', cursive;
```

```typescript
// New
const poppins = Poppins({ ... })
const kalam = Kalam({ ... })
```

## 📦 Data Migration

### Products

**Old**: Hardcoded in HTML
```html
<div class="producto-card">
  <h3>Naranja Deshidratada, 100g</h3>
  <div class="producto-price">$170</div>
</div>
```

**New**: Structured data in `lib/data/products.ts`
```typescript
{
  id: '1',
  slug: 'naranja-deshidratada-100g',
  name: 'Naranja Deshidratada',
  price: 170,
  // ... more fields
}
```

**Migration Steps**:
1. Extract product data from HTML
2. Create structured JSON/TypeScript objects
3. Add to `lib/data/products.ts`
4. Later: Move to database (Vercel Postgres)

### Contact Information

**Old**: Hardcoded in HTML
```html
<p>deshidratadosseko@gmail.com</p>
<p>+548 099 221 770</p>
```

**New**: Centralized in `lib/constants.ts`
```typescript
export const SITE_CONFIG = {
  contact: {
    email: 'deshidratadosseko@gmail.com',
    phone: '+548 099 221 770',
    // ...
  }
}
```

## 🔌 API Integration

### Contact Form

**Old**: Client-side only (alert)
```javascript
contactForm.addEventListener('submit', (e) => {
  alert('¡Gracias por tu mensaje!');
});
```

**New**: Full-stack with API route
```typescript
// app/api/contacto/route.ts
export async function POST(request) {
  // Validate with Zod
  // Save to database
  // Send email via Resend
  // Return response
}
```

### Shopping Cart

**Old**: Not implemented

**New**: Zustand store with persistence
```typescript
// store/cart.ts
export const useCartStore = create(persist(
  (set, get) => ({
    items: [],
    addItem: (product) => { /* ... */ },
    // ...
  }),
  { name: 'seko-cart' }
))
```

## 🚀 Deployment Migration

### Old Deployment
- Static files
- Any web server (Apache, Nginx, etc.)
- Manual upload via FTP

### New Deployment

#### Web (Vercel)
1. Connect GitHub repository
2. Configure environment variables
3. Automatic deployments on push
4. Preview deployments for PRs

#### Mobile (Expo EAS)
1. Configure `eas.json`
2. Build with `eas build`
3. Submit to App Store/Play Store

## 📝 Migration Checklist

### Pre-Migration
- [ ] Backup current site
- [ ] Document custom modifications
- [ ] Export product data
- [ ] List all contact information
- [ ] Inventory all images and assets

### Web Migration
- [x] Set up Next.js project
- [x] Create component structure
- [x] Migrate design system
- [x] Convert pages to React
- [x] Implement shopping cart
- [x] Create API routes
- [x] Set up database schema
- [ ] Migrate images to Vercel Blob
- [ ] Configure email service (Resend)
- [ ] Set up analytics
- [ ] Test all functionality
- [ ] Deploy to Vercel

### Mobile App
- [x] Set up React Native project
- [x] Create navigation structure
- [ ] Implement all screens
- [ ] Connect to API
- [ ] Test on iOS/Android
- [ ] Submit to app stores

### Post-Migration
- [ ] Update DNS records
- [ ] Set up redirects
- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] Performance optimization
- [ ] SEO audit

## 🐛 Common Issues & Solutions

### Issue: Images not loading
**Solution**: 
- Use Next.js Image component
- Add domains to `next.config.js`
- Store images in Vercel Blob

### Issue: Styles not matching
**Solution**:
- Check Tailwind configuration
- Review custom CSS in `globals.css`
- Use browser DevTools to compare

### Issue: Forms not submitting
**Solution**:
- Check API route is working
- Validate environment variables
- Review Zod schema validation

### Issue: Cart not persisting
**Solution**:
- Verify Zustand persistence config
- Check localStorage is available
- Review storage key naming

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Native Documentation](https://reactnative.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Expo Documentation](https://docs.expo.dev)

## 🤝 Support

For migration support, contact the development team or refer to AGENTS.md for role-specific guidelines.

---

**Migration Status**: ✅ Web App Complete | 🚧 Mobile App In Progress  
**Last Updated**: December 18, 2025

