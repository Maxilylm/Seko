import { Check } from 'lucide-react'

const features = ['100% Natural', 'Sin conservantes', 'Alta calidad']

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E2723] mb-8">
            Sobre Seko
          </h2>

          <div className="space-y-6 text-center">
            <p className="text-[#6D4C41] text-lg leading-relaxed">
              En Seko nos dedicamos a ofrecer productos deshidratados de la más
              alta calidad. Nuestro proceso de deshidratación preserva todos los
              nutrientes y el sabor natural de las frutas y verduras.
            </p>
            <p className="text-[#6D4C41] text-lg leading-relaxed">
              Creemos en la alimentación saludable y sostenible, por eso
              seleccionamos cuidadosamente cada ingrediente para garantizar que
              recibas lo mejor en cada bocado.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-lg"
                >
                  <div className="w-8 h-8 bg-[#823720] rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#FFF8DC]" />
                  </div>
                  <span className="font-medium text-[#3E2723]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

