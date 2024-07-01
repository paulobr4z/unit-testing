import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '.'

describe('<Button />', () => {
  it('Teste Render', () => {
    render(<Button />)

    const button = screen.getByTestId('button-component')
    expect(button).toBeInTheDocument()
  })
})
