import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'
import { useHistory } from 'react-router-dom'

describe('CreatePage', () => {
  it('renders  one header and six buttons', () => {
    render(
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
    )

    const buttonResetGame = screen.getByRole('button', { name: 'End game' })
    userEvent.click(buttonResetGame)
    //expect(handleClick).toBeCalled()
    expect(testHandleEndGame).toHaveBeenCalled()
    const buttonResetScores = screen.getByRole('button', {
      name: 'Reset scores',
    })
    userEvent.click(buttonResetScores)
    expect(testOnResetScores).toHaveBeenCalled()
  })
})
