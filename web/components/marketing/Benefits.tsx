import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const benefits = [
  {
    icon: '🌿',
    title: '100% Natural',
    description: 'Productos completamente naturales, sin aditivos ni conservantes artificiales. Solo lo mejor de la naturaleza.',
  },
  {
    icon: '🛡️',
    title: 'Calidad Garantizada',
    description: 'Seleccionamos cuidadosamente cada ingrediente para garantizar la más alta calidad en cada producto.',
  },
  {
    icon: '🚚',
    title: 'Envío Rápido',
    description: 'Recibe tus productos frescos y en perfecto estado, con envío rápido y seguro a todo Uruguay.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            ¿Por qué elegir Seko?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nos comprometemos con la calidad, frescura y nutrición en cada producto que ofrecemos
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center transition-all hover:-translate-y-2">
              <CardHeader>
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-2xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

