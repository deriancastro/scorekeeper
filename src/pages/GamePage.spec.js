import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'

describe('CreatePage', () => {
  it('renders  one header and six buttons', () => {
    render(
      <MemoryRouter>
        <GamePage
          nameOfGame="MacroMicro"
          players={[
            { name: 'rosa', score: 3 },
            { name: 'pepe', score: 2 },
          ]}
          onResetScores={jest.fn()}
          onEndGame={jest.fn()}
          onPlayerUpdate={() => {}}
          handleEndGame={jest.fn()}
        />
      </MemoryRouter>
    )

    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(6)
  })

  it('calls onResetScores and onEndGame', () => {
    const testHandleEndGame = jest.fn()
    const testOnResetScores = jest.fn()
    render(
      <MemoryRouter>
        <GamePage
          nameOfGame="MacroMicro"
          players={[
            { name: 'rosa', score: 3 },
            { name: 'pepe', score: 2 },
          ]}
          onResetScores={testOnResetScores}
          handleEndGame={testHandleEndGame}
          onPlayerUpdate={() => {}}
        />
      </MemoryRouter>
    )

    const buttonResetGame = screen.getByRole('button', { name: 'End game' })
    userEvent.click(buttonResetGame)
    expect(testHandleEndGame).toHaveBeenCalled()
    const buttonResetScores = screen.getByRole('button', {
      name: 'Reset scores',
    })
    userEvent.click(buttonResetScores)
    expect(testOnResetScores).toHaveBeenCalled()
  })
})
