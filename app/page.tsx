import { Hero } from '@/components/marketing/Hero'
import { Benefits } from '@/components/marketing/Benefits'
import { Products } from '@/components/marketing/Products'
import { About } from '@/components/marketing/About'
import { Contact } from '@/components/marketing/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <About />
      <Contact />
    </>
  )
}

