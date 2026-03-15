'use client'

import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'

const products = [
  {
    id: 1,
    name: 'Naranja Deshidratada, 100g',
    price: 170,
    image: '/assets/naranja_deshidratada.jpg',
  },
  {
    id: 2,
    name: 'Manzana deshidratada, 100g',
    price: 160,
    image: '/assets/manzana_deshidratada.jpg',
  },
  {
    id: 3,
    name: 'Mix Variado',
    price: 150,
    image: '/assets/pomelo_deshidratado.jpg',
    description: 'Una selección de productos con diferentes sabores. Naranjas, limones, manzanas y más.',
  },
]

export function Products() {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <section id="productos" className="py-20 bg-[#FFF8DC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E2723] mb-4">
          Nuestros Productos
        </h2>
        <p className="text-center text-[#6D4C41] text-lg mb-12 max-w-2xl mx-auto">
          Descubre nuestra variedad de frutas y verduras deshidratadas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-[#F5E6D3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#3E2723] mb-2 text-center">
                {product.name}
              </h3>
              <div className="text-2xl font-bold text-[#823720] mb-4 text-center">
                {formatPrice(product.price)}
              </div>
              {product.description && (
                <p className="text-[#6D4C41] mb-4 text-center flex-grow">
                  {product.description}
                </p>
              )}
              <Button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })
                }
                className="w-full bg-[#823720] hover:bg-[#A0522D] text-[#FFF8DC] transition-all hover:-translate-y-1 gap-2"
              >
                <ShoppingCart size={18} />
                Agregar al Carrito
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
