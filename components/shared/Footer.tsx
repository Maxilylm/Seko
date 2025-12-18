import Link from 'next/link'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#823720] text-[#FFF8DC]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-['Kalam'] tracking-wide">
              Seko
            </h3>
          </div>

          {/* Description */}
          <p className="mb-6 text-[#F5E6D3] max-w-md">
            Productos deshidratados naturales de la mejor calidad
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <Link
              href="#"
              className="hover:transform hover:-translate-y-1 transition-transform duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="hover:transform hover:-translate-y-1 transition-transform duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="hover:transform hover:-translate-y-1 transition-transform duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FFF8DC]/30 pt-6 mt-6 text-center">
          <p className="text-[#F5E6D3] text-sm">
            &copy; {currentYear} Seko. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

