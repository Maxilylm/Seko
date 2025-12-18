'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'deshidratadosseko@gmail.com',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+548 099 221 770 - +548 092 212 416',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    content: 'Uruguay',
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitMessage('¡Gracias por tu mensaje! Te contactaremos pronto.')
        reset()
      } else {
        setSubmitMessage('Hubo un error al enviar el mensaje. Intenta nuevamente.')
      }
    } catch (error) {
      setSubmitMessage('Hubo un error al enviar el mensaje. Intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E2723] mb-4">
          Contacto
        </h2>
        <p className="text-center text-[#6D4C41] text-lg mb-12">
          ¿Tienes alguna pregunta? ¡Escríbenos!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-[#3E2723] mb-2"
              >
                Nombre
              </label>
              <Input
                id="nombre"
                {...register('nombre')}
                className="w-full"
                placeholder="Tu nombre"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#3E2723] mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="w-full"
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-semibold text-[#3E2723] mb-2"
              >
                Mensaje
              </label>
              <Textarea
                id="mensaje"
                {...register('mensaje')}
                className="w-full min-h-[150px]"
                placeholder="Escribe tu mensaje aquí..."
              />
              {errors.mensaje && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#823720] hover:bg-[#A0522D] text-[#FFF8DC]"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>

            {submitMessage && (
              <p className="text-center text-sm mt-4">{submitMessage}</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#823720]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#823720] mb-1">
                      {info.title}
                    </h3>
                    <p className="text-[#6D4C41]">{info.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

