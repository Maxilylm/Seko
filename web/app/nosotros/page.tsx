import { Metadata } from 'next'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce la historia de Seko y nuestro compromiso con la calidad y la alimentación saludable.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-brand-warm py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Sobre Seko
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
              Nuestra pasión por la alimentación saludable y natural
            </p>
          </div>
        </div>
      </div>

      {/* Story section */}
      <div className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-8 text-gray-700">
              En <span className="font-semibold text-brand-brown">Seko</span> nos dedicamos a ofrecer productos 
              deshidratados de la más alta calidad. Nuestro proceso de deshidratación preserva todos los nutrientes 
              y el sabor natural de las frutas y verduras.
            </p>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Creemos en la alimentación saludable y sostenible, por eso seleccionamos cuidadosamente cada 
              ingrediente para garantizar que recibas lo mejor en cada bocado. Nuestro compromiso es ofrecer 
              productos 100% naturales, sin conservantes ni aditivos artificiales.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Cada producto pasa por un riguroso control de calidad para asegurar que cumple con nuestros 
              estándares más exigentes. Trabajamos directamente con productores locales para obtener las 
              mejores materias primas y apoyar la economía de nuestra comunidad.
            </p>
          </div>

          {/* Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Calidad Premium',
                  description: 'Solo utilizamos las mejores frutas y verduras para nuestros productos.',
                },
                {
                  title: '100% Natural',
                  description: 'Sin conservantes, colorantes ni aditivos artificiales.',
                },
                {
                  title: 'Sostenibilidad',
                  description: 'Nos preocupamos por el medio ambiente y trabajamos de forma responsable.',
                },
                {
                  title: 'Compromiso',
                  description: 'Tu satisfacción es nuestra prioridad número uno.',
                },
              ].map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-brown">
                      <Check className="h-6 w-6 text-brand-cream" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 p-8 bg-brand-warm rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ¿Por qué elegirnos?
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-brown text-brand-cream font-bold text-lg">
                  ✓
                </span>
                <span className="text-lg font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-brown text-brand-cream font-bold text-lg">
                  ✓
                </span>
                <span className="text-lg font-medium">Sin conservantes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-brown text-brand-cream font-bold text-lg">
                  ✓
                </span>
                <span className="text-lg font-medium">Alta calidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

