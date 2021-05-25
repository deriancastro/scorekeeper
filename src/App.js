import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { Switch, Route, useHistory } from 'react-router-dom'
import useLocalStorage from './sort/useLocalStorage'

export default function App() {
  const [history, setHistory] = useLocalStorage('history', [])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const { push } = useHistory()

  return (
    <AppGrid>
      <div>
        <Switch>
          <Route exact path="/">
            <CreatePage onSubmit={handleSubmit} />
          </Route>

          <Route path="/game">
            <GamePage
              onResetScores={resetScores}
              handleEndGame={handleEndGame}
              onPlayerUpdate={updateScore}
              nameOfGame={nameOfGame}
              players={players}
            />
          </Route>

          <Route path="/history">
            <HistoryPage games={history} />
          </Route>
        </Switch>
      </div>

      <Route path={['/', '/history']}>
        <Navigation
          pages={[
            { name: 'create', path: '/' },
            { name: 'history', path: '/history' },
          ]}
        />
      </Route>
    </AppGrid>
  )

  function handleEndGame() {
    const timeStamp = new Date().toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    setHistory([{ players, nameOfGame, timeStamp }, ...history])
    push('/history')
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    push('/game')
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
  padding: 12px;
  gap: 20px;
`
