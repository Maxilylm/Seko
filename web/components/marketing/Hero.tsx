import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-warm">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/fondo.jpg"
          alt="Fondo Seko"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Frutas y Verduras{' '}
            <span className="text-brand-brown">Deshidratadas</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
            Descubre el sabor concentrado de la naturaleza. Productos 100% naturales, 
            sin conservantes artificiales, llenos de nutrientes y listos para disfrutar.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/productos">
              <Button size="lg">Ver Productos</Button>
            </Link>
            <Link href="/#beneficios">
              <Button variant="secondary" size="lg">
                Más Información
              </Button>
            </Link>
          </div>
          
          {/* Features */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-medium">100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-medium">Sin Conservantes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-medium">Alta Calidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

