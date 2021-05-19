import Player from './Player'
import Button from './Button'
import styled from 'styled-components'
import PlayerForm from './PlayerForm'
import { useState } from 'react'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <AppBody>
      <PlayerForm onSubmit={createPlayer} />

      <ul>
        {players.map((player, index) => (
          <li>
            <Player
              onMinus={() => updateScore(index, -1)}
              onPlus={() => updateScore(index, +1)}
              key={player.name}
              name={player.name}
              score={player.score}
            />
          </li>
        ))}
      </ul>
      <div className="App__buttons">
        <Button color="white" isActive onClick={resetScores}>
          Reset scores
        </Button>
        <Button onClick={resetAll}>Reset all</Button>
      </div>
    </AppBody>
  )
  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }
  function resetAll() {
    setPlayers([])
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

export default App

const AppBody = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: min-content auto min-content;
  padding: 20px;
  height: 100vh;
  background: papayawhip;

  ul {
    display: grid;
    align-content: start;
    list-style: none;
    padding: 0;
  }

  div {
    display: grid;
    gap: 12px;
  }
`
