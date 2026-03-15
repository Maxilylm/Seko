'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#nosotros', label: 'Sobre Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const openCart = useCartStore((state) => state.openCart)
  const totalItems = useCartStore((state) => state.totalItems)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const itemCount = totalItems()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-[#823720] transition-shadow duration-300',
        scrolled && 'shadow-lg'
      )}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center py-4">
            <span className="text-3xl font-bold font-['Kalam'] text-[#FFF8DC] tracking-wide">
              Seko
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-[#FFF8DC] font-medium transition-colors hover:text-[#F5E6D3]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFF8DC] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative text-[#FFF8DC] p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-[#F5E6D3] transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={24} />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#CD853F] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#FFF8DC] p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with animation */}
        <div
          className={cn(
            'lg:hidden bg-[#823720] border-t border-[#FFF8DC]/20 overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
          )}
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-6 py-4 text-[#FFF8DC] font-medium hover:bg-[#A0522D] transition-colors text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
