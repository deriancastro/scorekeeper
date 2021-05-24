import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Player from './Player'

describe('Player', () => {
  it('returns a name, score and two buttons', async () => {
    render(
      <Player name="John" score={55} onPlus={() => {}} onMinus={() => {}} />
    )
    const buttons = screen.getAllByRole('button')

    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('55')).toBeInTheDocument()
    expect(buttons.length).toBe(2)
  })

  it('calls onPlus and onMinus correctly', async () => {
    const OnPlus = jest.fn()
    const OnMinus = jest.fn()
    render(<Player name="John" score={0} onPlus={OnPlus} onMinus={OnMinus} />)
    const plusButton = screen.getByRole('button', { name: '+' })
    userEvent.click(plusButton)
    expect(OnPlus).toBeCalled()
    const minusButton = screen.getByRole('button', { name: '-' })
    userEvent.click(minusButton)
    expect(OnMinus).toBeCalled()
  })
})
