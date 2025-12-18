# Seko - E-commerce de Productos Deshidratados

Plataforma moderna de e-commerce para Seko, especializada en frutas y verduras deshidratadas. Construida con Next.js 14, React 18, TypeScript y desplegada en Vercel.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel
- **Email**: Resend (para formulario de contacto)

## 📁 Estructura del Proyecto

```
Seko/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── contacto/         # Contact form endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── marketing/            # Marketing components
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Products.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── shared/               # Shared components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── utils.ts              # Utility functions
│   └── validations.ts        # Zod schemas
├── public/
│   └── assets/               # Static assets
├── AGENTS.md                 # AI Agent roles & guidelines
└── package.json
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Configuración

1. **Clonar el repositorio**:
```bash
git clone <repository-url>
cd Seko
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar variables de entorno**:
```bash
cp .env.example .env.local
```

Edita `.env.local` y agrega tus claves:
```env
RESEND_API_KEY=tu_clave_de_resend
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Ejecutar en desarrollo**:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run type-check` - Verifica tipos de TypeScript

## 🎨 Características

### ✅ Implementadas

- ✨ Diseño moderno y responsive (mobile-first)
- 🎯 Navegación suave entre secciones
- 📱 Menú móvil adaptable con animaciones
- 🛍️ Catálogo de productos con imágenes
- 📧 Formulario de contacto con validación
- ⚡ Optimización de rendimiento (Next.js Image, ISR)
- 🎨 Sistema de diseño consistente con Tailwind CSS
- ♿ Accesibilidad mejorada
- 🔒 Validación de formularios con Zod
- 🚀 Despliegue en Vercel con Edge Runtime

### 🔄 Secciones

1. **Hero** - Banner principal con CTA
2. **Beneficios** - Por qué elegir Seko
3. **Productos** - Catálogo de productos deshidratados
4. **Sobre Nosotros** - Historia y valores de la empresa
5. **Contacto** - Formulario e información de contacto

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.ts`:

```typescript
brand: {
  brown: '#8B4513',          // Color principal
  'brown-secondary': '#A0522D', // Color secundario
  cream: '#FFF8DC',           // Texto sobre fondo oscuro
  warm: '#F5E6D3',            // Fondos cálidos
}
```

### Agregar Nuevos Productos

Edita el array de productos en `components/marketing/Products.tsx`:

```typescript
const products = [
  {
    id: 1,
    name: 'Nombre del Producto',
    price: 150,
    image: '/assets/producto.jpg',
    description: 'Descripción opcional',
  },
  // ... más productos
]
```

## 🚀 Despliegue en Vercel

### Despliegue Automático

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Configura las variables de entorno en Vercel Dashboard
4. ¡Deploy! 🎉

### Variables de Entorno en Vercel

Agrega estas variables en Vercel Dashboard → Settings → Environment Variables:

```
RESEND_API_KEY
NEXT_PUBLIC_SITE_URL
```

### Comando Manual

```bash
npm install -g vercel
vercel --prod
```

## 📧 Configuración del Formulario de Contacto

El formulario usa Resend para enviar emails. Para configurarlo:

1. Crea una cuenta en [resend.com](https://resend.com)
2. Obtén tu API key
3. Agrega la key a `.env.local` o Vercel
4. Descomenta el código en `app/api/contacto/route.ts`

## 🔒 Seguridad

- ✅ Validación de inputs con Zod
- ✅ Sanitización de datos
- ✅ Headers de seguridad configurados
- ✅ Edge Runtime para mejor performance
- ✅ Variables de entorno para secretos

## 📱 Mobile-First Design

La aplicación está diseñada con enfoque mobile-first:

- Breakpoints responsive de Tailwind CSS
- Menú hamburguesa en móviles
- Imágenes optimizadas con Next.js Image
- Touch-friendly buttons y navegación
- Grid adaptable según tamaño de pantalla

## 🎯 Performance

Optimizaciones implementadas:

- ⚡ Server Components por defecto (Next.js 14)
- 🖼️ Optimización automática de imágenes
- 🔄 Edge Runtime para APIs
- 📦 Code splitting automático
- 🎨 CSS optimizado con Tailwind

### Targets de Performance

- Lighthouse Score: >90 en todas las métricas
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

## 🤖 AI Agents & Development

Este proyecto usa un sistema de agentes AI para desarrollo. Consulta `AGENTS.md` para:

- Roles y responsabilidades de cada agente
- Mejores prácticas de desarrollo
- Guías de arquitectura
- Estándares de código

**IMPORTANTE**: Todos los asistentes AI deben leer `AGENTS.md` antes de trabajar en el proyecto.

## 📚 Tecnologías y Librerías

### Core
- **Next.js 14**: Framework React con App Router
- **React 18**: Librería UI
- **TypeScript**: Tipado estático

### UI/Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Componentes reutilizables
- **Lucide React**: Iconos modernos
- **class-variance-authority**: Gestión de variantes de componentes

### Forms & Validation
- **React Hook Form**: Gestión de formularios
- **Zod**: Schema validation

### Development
- **ESLint**: Linter
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🔄 Migración desde HTML/CSS/JS

Este proyecto ha sido refactorizado desde una versión HTML/CSS/JS a Next.js/React/TypeScript. Los archivos originales están en `webSeko/` (preservados para referencia).

### Ventajas de la Nueva Arquitectura

- ✅ **TypeScript**: Detección de errores en desarrollo
- ✅ **Component-based**: Código más mantenible y reutilizable
- ✅ **Server Components**: Mejor performance por defecto
- ✅ **Image Optimization**: Carga más rápida de imágenes
- ✅ **API Routes**: Backend integrado
- ✅ **Modern Tooling**: Hot reload, type checking, linting

## 📞 Información de Contacto

- **Email**: deshidratadosseko@gmail.com
- **Teléfono**: +548 099 221 770 - +548 092 212 416
- **Ubicación**: Uruguay

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

© 2024 Seko. Todos los derechos reservados.

---

**Mantenido por**: Seko Team  
**Última actualización**: Diciembre 2025

