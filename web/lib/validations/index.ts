import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000),
})

export const checkoutFormSchema = z.object({
  customerName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  customerEmail: z.string().email('Email inválido'),
  customerPhone: z.string().min(8, 'Teléfono inválido').max(20),
  street: z.string().min(5, 'Dirección inválida'),
  city: z.string().min(2, 'Ciudad inválida'),
  state: z.string().min(2, 'Departamento/Estado inválido'),
  zipCode: z.string().min(4, 'Código postal inválido'),
  country: z.string().default('Uruguay'),
})

export const productSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(2).max(255),
  description: z.string().min(10),
  price: z.number().positive(),
  category: z.string().min(2),
  imageUrl: z.string().url(),
  images: z.array(z.string().url()).optional(),
  stock: z.number().int().min(0).default(0),
  weight: z.string().min(1),
  benefits: z.array(z.string()).optional(),
  isActive: z.boolean().default(true),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type CheckoutFormData = z.infer<typeof checkoutFormSchema>
export type ProductData = z.infer<typeof productSchema>

