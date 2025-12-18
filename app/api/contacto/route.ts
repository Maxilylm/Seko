import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate request body
    const validatedData = contactFormSchema.parse(body)

    // Here you would integrate with your email service (e.g., Resend)
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData)

    // TODO: Integrate with Resend or another email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Seko <contacto@seko.com>',
    //   to: 'deshidratadosseko@gmail.com',
    //   subject: `Nuevo mensaje de ${validatedData.nombre}`,
    //   html: `
    //     <h2>Nuevo mensaje de contacto</h2>
    //     <p><strong>Nombre:</strong> ${validatedData.nombre}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${validatedData.mensaje}</p>
    //   `,
    // })

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}

export const runtime = 'edge' // Use edge runtime for better performance

