import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>(`/orders/:orderId`, ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Customer Name',
      email: 'example@example.com',
      phone: '123456789',
    },
    createdAt: new Date().toISOString(),
    status: 'processing',
    totalInCents: 1400,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 2,
        product: { name: 'Product 1' },
      },
      {
        id: 'order-item-2',
        priceInCents: 400,
        quantity: 1,
        product: { name: 'Product 2' },
      },
    ],
  })
})
