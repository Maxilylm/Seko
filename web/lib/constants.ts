export const SITE_CONFIG = {
  name: 'Seko',
  description: 'Productos deshidratados naturales. Frutas y verduras deshidratadas de la mejor calidad.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    instagram: '#',
    facebook: '#',
    whatsapp: 'https://wa.me/5480992217710',
  },
  contact: {
    email: 'deshidratadosseko@gmail.com',
    phone: '+548 099 221 770',
    phoneAlt: '+548 092 212 416',
    location: 'Uruguay',
  },
}

export const PRODUCT_CATEGORIES = [
  'Frutas Deshidratadas',
  'Verduras Deshidratadas',
  'Mix Variado',
] as const

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const

export const SHIPPING_COST = 300 // ARS
export const FREE_SHIPPING_THRESHOLD = 2000 // ARS

