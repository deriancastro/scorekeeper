import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders two input fields and one button', () => {
    render(
      <MemoryRouter>
        <CreatePage onSubmit={jest.fn()} />
      </MemoryRouter>
    )

    jest.spyOn(window, 'alert').mockImplementation(() => {})
    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1)
  })

  it('calls handleSubmit by -enter-', () => {
    const testHandleSubmit = jest.fn()

    render(
      <MemoryRouter>
        <CreatePage onSubmit={testHandleSubmit} />
      </MemoryRouter>
    )
    userEvent.type(
      screen.getByRole('textbox', { name: 'Name of game:' }),
      'MicroMacro'
    )
    userEvent.type(
      screen.getByRole('textbox', { name: 'Player names:' }),
      'Jonas, Maria'
    )
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(testHandleSubmit).toHaveBeenCalled()
  })

  it('calls handleSubmit by click', () => {
    const testHandleSubmit = jest.fn()

    render(
      <MemoryRouter>
        <CreatePage onSubmit={testHandleSubmit} />
      </MemoryRouter>
    )
    userEvent.type(
      screen.getByRole('textbox', { name: 'Name of game:' }),
      'MicroMacro'
    )
    userEvent.type(
      screen.getByRole('textbox', { name: 'Player names:' }),
      'pepe, julia'
    )
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    const button = screen.getByRole('button', { name: 'Create game' })
    userEvent.click(button)

    expect(testHandleSubmit).toHaveBeenCalledWith({
      nameOfGame: 'MicroMacro',
      players: [
        { name: 'pepe', score: 0 },
        { name: 'julia', score: 0 },
      ],
    })
  })
})
