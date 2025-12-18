import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <Card className="flex flex-col transition-all hover:-translate-y-2">
      <Link href={`/productos/${product.slug}`}>
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </CardHeader>
      </Link>
      
      <CardContent className="flex-1 p-6">
        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 hover:text-brand-brown transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-4 text-2xl font-bold text-brand-brown">
          {formatPrice(product.price)}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Agotado' : 'Agregar al Carrito'}
        </Button>
      </CardFooter>
    </Card>
  )
}

