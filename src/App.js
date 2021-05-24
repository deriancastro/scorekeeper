import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [history, setHistory] = useLocalStorage('history', [])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')

  const navButtons = ['create', 'history']

  return (
    <Router>
      <AppGrid>
        <div>
          <Switch>
            <Route path="/create">
              <CreatePage
                onNavigate={setCurrentPageId}
                onSubmit={handleSubmit}
              />
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
              <HistoryPage games={history} onNavigate={setCurrentPageId} />
            </Route>
          </Switch>
        </div>

        {currentPageId !== 'game' && (
          <NavWraper>
            {navButtons.map(button => (
              <Link to={'/' + button}>
                <Navigation
                  currentPageId={currentPageId}
                  onNavigate={setCurrentPageId}
                  pages={[{ title: button, id: button }]}
                />
              </Link>
            ))}
          </NavWraper>
        )}
      </AppGrid>
    </Router>
  )

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ players, nameOfGame }, ...history])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    setCurrentPageId('game')
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
const NavWraper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
