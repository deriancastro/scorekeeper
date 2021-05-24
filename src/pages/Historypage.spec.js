import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  it('renders one header HistoryEntry', () => {
    render(
      <HistoryPage
        games={[
          {
            key: 0,
            nameOfGame: 'MicroMacro',
            players: [
              { name: 'rosa', score: 3 },
              { name: 'pepe', score: 2 },
            ],
          },
        ]}
      />
    )
    expect(screen.getByRole('heading', { name: 'MicroMacro' }))
      .toBeInTheDocument
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
    expect(listItems[0]).toHaveTextContent('rosa')
    expect(listItems[0]).toHaveTextContent('3')
    expect(listItems[1]).toHaveTextContent('pepe')
    expect(listItems[1]).toHaveTextContent('2')
  })
})
