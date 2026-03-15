import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

export async function POST(req: NextRequest) {
  try {
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN
    if (!accessToken) {
      console.error('MERCADOPAGO_ACCESS_TOKEN is not configured')
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { items } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      )
    }

    const client = new MercadoPagoConfig({ accessToken })
    const preference = new Preference(client)

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seko.vercel.app'

    const result = await preference.create({
      body: {
        items: items.map((item: { id: number; name: string; price: number; quantity: number; image: string }) => ({
          id: String(item.id),
          title: item.name,
          unit_price: item.price,
          quantity: item.quantity,
          currency_id: 'UYU',
          picture_url: `${siteUrl}${item.image}`,
        })),
        back_urls: {
          success: `${siteUrl}/?payment=success`,
          failure: `${siteUrl}/?payment=failure`,
          pending: `${siteUrl}/?payment=pending`,
        },
        auto_return: 'approved',
        statement_descriptor: 'SEKO',
      },
    })

    return NextResponse.json({
      init_point: result.init_point,
      id: result.id,
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Error creating payment preference' },
      { status: 500 }
    )
  }
}
