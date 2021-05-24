import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders two input fields and one button', () => {
    render(<CreatePage onSubmit={jest.fn()} />)

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(1)
  })

  it('calls handleSubmit by -enter-', () => {
    const testHandleSubmit = jest.fn()

    render(<CreatePage onSubmit={testHandleSubmit} />)

    const form = screen.getByRole('form')
    const button = screen.getByRole('button', { name: 'Create game' })
    fireEvent.submit(form)

    expect(testHandleSubmit).toHaveBeenCalled()
  })

  it('calls handleSubmit by click', () => {
    const testHandleSubmit = jest.fn()

    render(<CreatePage onSubmit={testHandleSubmit} />)

    const button = screen.getByRole('button', { name: 'Create game' })
    userEvent.click(button)

    expect(testHandleSubmit).toHaveBeenCalled()
  })
})
