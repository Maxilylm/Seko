export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  category: string
  imageUrl: string
  images?: string[]
  stock: number
  weight: string
  benefits?: string[]
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  items: {
    productId: string
    productName: string
    price: number
    quantity: number
  }[]
  subtotal: number
  shipping: number
  total: number
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: Date
}

export interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

