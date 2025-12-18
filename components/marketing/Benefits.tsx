import { Leaf, Shield, Truck } from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: '100% Natural',
    description:
      'Productos completamente naturales, sin aditivos ni conservantes artificiales. Solo lo mejor de la naturaleza.',
  },
  {
    icon: Shield,
    title: 'Calidad Garantizada',
    description:
      'Seleccionamos cuidadosamente cada ingrediente para garantizar la más alta calidad en cada producto.',
  },
  {
    icon: Truck,
    title: 'Envío Rápido',
    description:
      'Recibe tus productos frescos y en perfecto estado, con envío rápido y seguro a todo Uruguay.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E2723] mb-4">
          ¿Por qué elegir Seko?
        </h2>
        <p className="text-center text-[#6D4C41] text-lg mb-12 max-w-2xl mx-auto">
          Nos comprometemos con la calidad, frescura y nutrición en cada
          producto que ofrecemos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#F5E6D3] rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#823720]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#3E2723] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#6D4C41] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

