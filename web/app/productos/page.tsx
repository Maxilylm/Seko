import { Metadata } from 'next'
import { ProductCard } from '@/components/shop/ProductCard'
import { getProducts } from '@/lib/data/products'

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Explora nuestra selección de frutas y verduras deshidratadas 100% naturales.',
}

export default function ProductsPage() {
  const products = getProducts()

  return (
    <div className="bg-brand-warm min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Nuestros Productos
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra variedad de frutas y verduras deshidratadas. 
            Todos nuestros productos son 100% naturales y sin conservantes.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600">
              No hay productos disponibles en este momento.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

