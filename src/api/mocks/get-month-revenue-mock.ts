import { http, HttpResponse } from 'msw'

import { GetMonthRevenueOrdersAmountResponse } from '../get-month-revenue'

export const getMonthRevenueOrdersAmountMock = http.get<
  never,
  never,
  GetMonthRevenueOrdersAmountResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 123922,
    diffFromLastMonth: 22,
  })
})
