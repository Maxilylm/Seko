# Guía de Contribución - Seko

¡Gracias por tu interés en contribuir a Seko! Esta guía te ayudará a entender cómo trabajar en este proyecto.

## 🤖 IMPORTANTE: Lee AGENTS.md Primero

Antes de hacer cualquier cambio, **DEBES leer** [`AGENTS.md`](./AGENTS.md). Este archivo define:

- Roles de agentes AI para desarrollo
- Arquitectura y mejores prácticas
- Estándares de código
- Guías de tecnología

**Todos los desarrolladores y AI assistants deben seguir las guías en AGENTS.md.**

## 🚀 Quick Start

1. **Fork y Clone**:
```bash
git clone https://github.com/tu-usuario/Seko.git
cd Seko
```

2. **Instalar Dependencias**:
```bash
npm install
```

3. **Configurar Environment**:
```bash
cp .env.example .env.local
```

4. **Ejecutar Development Server**:
```bash
npm run dev
```

## 📁 Estructura del Proyecto

Consulta el README.md para la estructura completa. Puntos clave:

- `app/` - Next.js App Router (páginas y API routes)
- `components/` - Componentes React reutilizables
- `lib/` - Utilidades y funciones helper
- `public/` - Assets estáticos

## 🎯 Workflow de Desarrollo

### 1. Crear una Branch

```bash
git checkout -b feature/nombre-feature
# o
git checkout -b fix/nombre-bug
```

### 2. Naming Conventions

**Branches:**
- `feature/*` - Nueva funcionalidad
- `fix/*` - Bug fix
- `refactor/*` - Refactoring de código
- `docs/*` - Documentación
- `chore/*` - Mantenimiento

**Commits:**
Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add product filtering
fix: resolve cart calculation bug
docs: update API documentation
style: format code with prettier
refactor: simplify checkout flow
test: add unit tests for ProductCard
chore: update dependencies
```

### 3. Hacer Cambios

- Sigue las guías en `AGENTS.md`
- Usa TypeScript para todo código nuevo
- Agrega tests si es apropiado
- Actualiza documentación si es necesario

### 4. Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
```

### 5. Commit y Push

```bash
git add .
git commit -m "feat: add amazing feature"
git push origin feature/nombre-feature
```

### 6. Crear Pull Request

1. Ve a GitHub y crea un PR
2. Describe los cambios
3. Referencia issues relacionados
4. Espera review

## 🎨 Estándares de Código

### TypeScript

```typescript
// ✅ BIEN: Tipos explícitos
interface ProductProps {
  product: Product
  onAddToCart: (id: number) => void
}

export function ProductCard({ product, onAddToCart }: ProductProps) {
  // ...
}

// ❌ MAL: Sin tipos
export function ProductCard({ product, onAddToCart }) {
  // ...
}
```

### React Components

```typescript
// ✅ BIEN: Functional components con TypeScript
'use client' // Solo si necesita interactividad

import { useState } from 'react'

interface Props {
  title: string
}

export function MyComponent({ title }: Props) {
  const [count, setCount] = useState(0)
  
  return <div>{title}</div>
}

// ❌ MAL: Class components
class MyComponent extends React.Component {
  // ...
}
```

### Styling

```typescript
// ✅ BIEN: Tailwind classes
<div className="flex items-center gap-4 p-4 bg-white rounded-lg">

// ✅ BIEN: Conditional classes con cn()
import { cn } from '@/lib/utils'

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className
)}>

// ❌ MAL: Inline styles (usar solo para valores dinámicos)
<div style={{ padding: '16px' }}>
```

### File Naming

- **Components**: `PascalCase.tsx` (e.g., `ProductCard.tsx`)
- **Utilities**: `camelCase.ts` (e.g., `formatPrice.ts`)
- **Pages**: Next.js convenciones (`page.tsx`, `layout.tsx`)
- **Constants**: `UPPER_SNAKE_CASE`

## 🧪 Testing Guidelines

### Unit Tests

```typescript
// components/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../ProductCard'

describe('ProductCard', () => {
  it('renders product name', () => {
    const product = { name: 'Test Product', price: 100 }
    render(<ProductCard product={product} />)
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })
})
```

## 🎨 UI/UX Guidelines

- **Mobile-First**: Diseña para móvil primero
- **Accessibility**: Usa semantic HTML, ARIA labels
- **Performance**: Optimiza imágenes, lazy load
- **Consistency**: Usa shadcn/ui components

## 📝 Documentación

### Componentes

```typescript
/**
 * ProductCard displays a single product with image, name, and price.
 * 
 * @param product - The product data to display
 * @param onAddToCart - Callback when add to cart is clicked
 * 
 * @example
 * ```tsx
 * <ProductCard 
 *   product={myProduct} 
 *   onAddToCart={handleAddToCart}
 * />
 * ```
 */
export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // ...
}
```

### Funciones Complejas

```typescript
/**
 * Calculates the final price with discounts and taxes.
 * 
 * @param basePrice - The base price before calculations
 * @param discount - Discount percentage (0-100)
 * @param taxRate - Tax rate (e.g., 0.21 for 21%)
 * @returns The final price
 */
export function calculateFinalPrice(
  basePrice: number,
  discount: number,
  taxRate: number
): number {
  // ...
}
```

## 🚫 Lo que NO hacer

- ❌ No commitear archivos `.env`
- ❌ No usar `any` en TypeScript
- ❌ No hacer commits directos a `main`
- ❌ No ignorar errores de TypeScript
- ❌ No usar librerías sin consultar
- ❌ No hacer PRs gigantes (mantenerlos pequeños)
- ❌ No ignorar los linter warnings

## ✅ Checklist antes de PR

- [ ] Código sigue estándares de `AGENTS.md`
- [ ] TypeScript compila sin errores (`npm run type-check`)
- [ ] ESLint pasa sin warnings (`npm run lint`)
- [ ] Build funciona (`npm run build`)
- [ ] Funcionalidad probada en desarrollo
- [ ] Mobile responsive verificado
- [ ] Documentación actualizada si es necesario
- [ ] Tests agregados/actualizados si es apropiado
- [ ] Commits siguen Conventional Commits
- [ ] PR description es clara y completa

## 🐛 Reportar Bugs

Usa GitHub Issues con este formato:

```markdown
**Descripción del Bug**
Descripción clara del problema.

**Pasos para Reproducir**
1. Ve a '...'
2. Click en '...'
3. Observa el error

**Comportamiento Esperado**
Lo que debería pasar.

**Screenshots**
Si aplica, agrega screenshots.

**Entorno**
- OS: [e.g., macOS]
- Browser: [e.g., Chrome 120]
- Version: [e.g., 1.0.0]
```

## 💡 Sugerir Features

Usa GitHub Issues con tag `enhancement`:

```markdown
**Descripción de la Feature**
Descripción clara de lo que quieres agregar.

**Motivación**
¿Por qué es útil esta feature?

**Propuesta de Implementación**
Ideas sobre cómo implementarla (opcional).
```

## 🔄 Code Review

Cuando revises PRs:

1. **Funcionalidad**: ¿Funciona correctamente?
2. **Código**: ¿Sigue estándares?
3. **Tests**: ¿Tiene tests apropiados?
4. **Performance**: ¿Hay issues de performance?
5. **Security**: ¿Hay vulnerabilidades?
6. **Documentation**: ¿Está documentado?

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

## 🤝 Código de Conducta

- Se respetuoso y profesional
- Da feedback constructivo
- Acepta críticas constructivas
- Ayuda a otros contribuidores
- Mantén un ambiente positivo

## ❓ Preguntas

Si tienes preguntas:

1. Revisa la documentación
2. Busca en GitHub Issues existentes
3. Crea un nuevo Issue con tag `question`

## 🎉 Reconocimientos

Todos los contribuidores serán reconocidos en el README.

---

¡Gracias por contribuir a Seko! 🚀

