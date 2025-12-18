import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

