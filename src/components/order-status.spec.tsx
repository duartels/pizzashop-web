import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it.each`
    status          | expectedText    | expectedColor
    ${'canceled'}   | ${'Cancelado'}  | ${'bg-rose-500'}
    ${'processing'} | ${'Em preparo'} | ${'bg-amber-500'}
    ${'delivering'} | ${'Em entrega'} | ${'bg-amber-500'}
    ${'delivered'}  | ${'Entregue'}   | ${'bg-emerald-500'}
    ${'pending'}    | ${'Pendente'}   | ${'bg-slate-400'}
  `(
    'should display the right text based on order status - $status',
    ({ status, expectedText, expectedColor }) => {
      const wrapper = render(<OrderStatus status={status} />)

      const statusText = wrapper.getByText(expectedText)
      const badge = wrapper.getByTestId('badge')

      expect(statusText).toBeInTheDocument()
      expect(badge).toHaveClass(expectedColor)
    },
  )
})
