import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navegation from './Navigation'

describe('Navegation', () => {
  it('receives an array and produces a button for each element in the array', () => {
    render(
      <Navegation
        onNavigate={() => {}}
        pages={[
          { title: 'create', id: 'create' },
          { title: 'history', id: 'history' },
        ]}
      />
    )

    const NavButtons = screen.getAllByRole('button')
    expect(NavButtons.length).toBe(2)
  })
  it('calls onNavigate correctly', () => {
    const onNavigate = jest.fn()
    render(
      <Navegation
        onNavigate={onNavigate}
        pages={[
          { title: 'create', id: 'create' },
          { title: 'history', id: 'history' },
        ]}
      />
    )

    const createNavButton = screen.getByRole('button', { name: 'Create' })
    userEvent.click(createNavButton)
    expect(onNavigate).toBeCalled()
    const historyNavButton = screen.getByRole('button', { name: 'History' })
    userEvent.click(historyNavButton)
    expect(onNavigate).toBeCalled()
  })
})
