import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="inicio" className="hero-bg min-h-[90vh] flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] mb-6 leading-tight">
              Frutas y Verduras{' '}
              <span className="text-[#823720]">Deshidratadas</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6D4C41] mb-8 leading-relaxed max-w-3xl mx-auto">
              Descubre el sabor concentrado de la naturaleza. Productos 100%
              naturales, sin conservantes artificiales, llenos de nutrientes y
              listos para disfrutar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#823720] hover:bg-[#A0522D] text-[#FFF8DC] rounded-full px-8 transition-all hover:-translate-y-1"
              >
                <Link href="#productos">Ver Productos</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#823720] text-[#823720] hover:bg-[#823720] hover:text-[#FFF8DC] rounded-full px-8 transition-all hover:-translate-y-1"
              >
                <Link href="#beneficios">Más Información</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

