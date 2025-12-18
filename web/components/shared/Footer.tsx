import Link from 'next/link'
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-brand-brownDark text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <h3 className="font-handwritten text-3xl font-bold mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-brand-warm text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-warm hover:text-brand-cream transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-brand-warm hover:text-brand-cream transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-brand-warm hover:text-brand-cream transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-brand-warm hover:text-brand-cream transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-brand-warm text-sm">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-brand-cream transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-warm text-sm">
                <Phone className="h-4 w-4" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-brand-warm text-sm">
                <MapPin className="h-4 w-4" />
                <span>{SITE_CONFIG.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-6 border-t border-brand-brownLight pt-8">
          <a
            href={SITE_CONFIG.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-warm hover:text-brand-cream transition-all hover:-translate-y-1"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href={SITE_CONFIG.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-warm hover:text-brand-cream transition-all hover:-translate-y-1"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href={SITE_CONFIG.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-warm hover:text-brand-cream transition-all hover:-translate-y-1"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-brand-brownLight pt-8 text-center">
          <p className="text-sm text-brand-warm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

