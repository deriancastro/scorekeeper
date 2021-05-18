import './App.css'
import Player from './Player'
import Button from './Button'
import PlayerForm from './PlayerForm'
import { useState } from 'react'

function App() {
  const [players, setPlayers] = useState([])

  return (
    <div className="App">
      <PlayerForm onSubmit={createPlayer} />

      <ul className="App__Player-List">
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
        <Button onClick={resetScores}>Reset scores</Button>
        <Button onClick={resetAll}>Reset all</Button>
      </div>
    </div>
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
