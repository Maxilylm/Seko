// Global type definitions for the Seko project

export interface Product {
  id: number
  name: string
  price: number
  image: string
  description?: string
  category?: string
  stock?: number
}

export interface ContactFormData {
  nombre: string
  email: string
  mensaje: string
}

export interface Benefit {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: string
}

export interface NavLink {
  href: string
  label: string
}

