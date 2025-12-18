import { NextRequest, NextResponse } from 'next/server'
import { getProducts } from '@/lib/data/products'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    let products = getProducts()

    if (category) {
      products = products.filter((p) => p.category === category)
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    )
  }
}

