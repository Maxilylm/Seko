'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { SITE_CONFIG } from '@/lib/constants'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Productos', href: '/productos' },
  { name: 'Beneficios', href: '/#beneficios' },
  { name: 'Sobre Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-brownDark shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-handwritten text-3xl font-bold text-brand-cream">
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-cream"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-brand-cream transition-colors hover:text-brand-warm relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-cream after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Cart button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/carrito">
            <Button variant="secondary" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-semibold text-brand-cream hover:bg-brand-brownLight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/carrito"
              className="flex items-center rounded-md px-3 py-2 text-base font-semibold text-brand-cream hover:bg-brand-brownLight"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Carrito
              {totalItems > 0 && (
                <span className="ml-2 rounded-full bg-brand-accent px-2 py-0.5 text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

