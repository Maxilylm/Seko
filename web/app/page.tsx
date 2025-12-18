import { Hero } from '@/components/marketing/Hero'
import { Benefits } from '@/components/marketing/Benefits'
import { ProductCard } from '@/components/shop/ProductCard'
import { Button } from '@/components/ui/button'
import { getProducts } from '@/lib/data/products'
import Link from 'next/link'

export default function HomePage() {
  const products = getProducts().slice(0, 3) // Show first 3 products

  return (
    <>
      <Hero />
      <Benefits />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-brand-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Nuestros Productos
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra variedad de frutas y verduras deshidratadas
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/productos">
              <Button size="lg">Ver Todos los Productos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Sobre Seko
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                En Seko nos dedicamos a ofrecer productos deshidratados de la más alta calidad. 
                Nuestro proceso de deshidratación preserva todos los nutrientes y el sabor natural 
                de las frutas y verduras.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Creemos en la alimentación saludable y sostenible, por eso seleccionamos cuidadosamente 
                cada ingrediente para garantizar que recibas lo mejor en cada bocado.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-brown text-brand-cream font-bold">✓</span>
                  <span className="font-medium">100% Natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-brown text-brand-cream font-bold">✓</span>
                  <span className="font-medium">Sin conservantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-brown text-brand-cream font-bold">✓</span>
                  <span className="font-medium">Alta calidad</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/nosotros">
                  <Button variant="secondary" size="lg">
                    Conoce más sobre nosotros
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-brown to-brand-brownLight" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

