import { create } from 'zustand'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        }
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        isOpen: true,
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.id !== id) }
      }
      return {
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
      }
    }),

  clearCart: () => set({ items: [], isOpen: false }),

  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}))
