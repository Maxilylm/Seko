import type { Product } from '@/types'

// Mock data for products - In production, this would come from the database
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'naranja-deshidratada-100g',
    name: 'Naranja Deshidratada',
    description: 'Naranjas deshidratadas 100% naturales. Perfectas para snacks, té o decoración. Rico en vitamina C y antioxidantes.',
    price: 170,
    category: 'Frutas Deshidratadas',
    imageUrl: '/assets/naranja_deshidratada.jpg',
    images: ['/assets/naranja_deshidratada.jpg'],
    stock: 50,
    weight: '100g',
    benefits: [
      'Rica en vitamina C',
      'Antioxidantes naturales',
      'Sin azúcar añadido',
      'Perfecta para té e infusiones',
    ],
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    slug: 'manzana-deshidratada-100g',
    name: 'Manzana Deshidratada',
    description: 'Manzanas deshidratadas naturales. Snack saludable y delicioso, rico en fibra y nutrientes esenciales.',
    price: 160,
    category: 'Frutas Deshidratadas',
    imageUrl: '/assets/manzana_deshidratada.jpg',
    images: ['/assets/manzana_deshidratada.jpg'],
    stock: 45,
    weight: '100g',
    benefits: [
      'Alta en fibra',
      'Snack saludable',
      'Sin conservantes',
      'Energía natural',
    ],
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '3',
    slug: 'mix-variado-100g',
    name: 'Mix Variado',
    description: 'Una selección de frutas deshidratadas variadas. Incluye naranjas, limones, manzanas y más. Perfecto para probar diferentes sabores.',
    price: 150,
    category: 'Mix Variado',
    imageUrl: '/assets/pomelo_deshidratado.jpg',
    images: ['/assets/pomelo_deshidratado.jpg'],
    stock: 30,
    weight: '100g',
    benefits: [
      'Variedad de sabores',
      'Todos los nutrientes',
      'Perfecto para regalar',
      'Gran valor',
    ],
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '4',
    slug: 'limon-deshidratado-100g',
    name: 'Limón Deshidratado',
    description: 'Limones deshidratados con su sabor cítrico intenso. Ideal para bebidas, coctelería y decoración culinaria.',
    price: 175,
    category: 'Frutas Deshidratadas',
    imageUrl: '/assets/limon_deshidratado.jpg',
    images: ['/assets/limon_deshidratado.jpg'],
    stock: 40,
    weight: '100g',
    benefits: [
      'Sabor cítrico intenso',
      'Perfecto para bebidas',
      'Propiedades antioxidantes',
      'Vitamina C',
    ],
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
]

export function getProducts(): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.isActive)
}

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug && p.isActive)
}

export function getProductsByCategory(category: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category && p.isActive)
}

