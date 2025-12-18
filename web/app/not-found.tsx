import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-brown mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link href="/">
          <Button size="lg">
            Volver al Inicio
          </Button>
        </Link>
      </div>
    </div>
  )
}

