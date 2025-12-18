import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBySlug, getProducts } from '@/lib/data/products'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { AddToCartButton } from '@/components/shop/AddToCartButton'
import { ArrowLeft, Check } from 'lucide-react'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const products = getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Producto no encontrado',
    }
  }
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back button */}
        <Link 
          href="/productos" 
          className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-brownLight transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">Volver a productos</span>
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-600">{product.weight}</p>
            
            <div className="mt-6">
              <span className="text-4xl font-bold text-brand-brown">
                {formatPrice(product.price)}
              </span>
            </div>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Beneficios
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-brown flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stock status */}
            <div className="mt-8">
              {product.stock > 0 ? (
                <p className="text-sm text-green-600 font-medium">
                  ✓ En stock ({product.stock} disponibles)
                </p>
              ) : (
                <p className="text-sm text-red-600 font-medium">
                  Agotado
                </p>
              )}
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>

            {/* Category */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Categoría:</span>{' '}
                <span className="text-brand-brown">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

