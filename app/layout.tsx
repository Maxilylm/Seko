import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { Cart } from '@/components/shared/Cart'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Seko - Productos Deshidratados',
  description:
    'Seko - Productos deshidratados naturales. Frutas y verduras deshidratadas de la mejor calidad.',
  keywords: ['frutas deshidratadas', 'verduras deshidratadas', 'snacks saludables', 'productos naturales'],
  authors: [{ name: 'Seko' }],
  openGraph: {
    title: 'Seko - Productos Deshidratados',
    description: 'Frutas y verduras deshidratadas de la mejor calidad',
    type: 'website',
    locale: 'es_UY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Cart />
      </body>
    </html>
  )
}

