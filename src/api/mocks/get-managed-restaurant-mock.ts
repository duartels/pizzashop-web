import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurante-id',
    name: 'Restaurante 1',
    description: 'Restaurante 1 description',
    managerId: 'custom-manager-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
