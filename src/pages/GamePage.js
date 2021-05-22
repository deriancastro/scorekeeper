import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../components/Header'
import Player from '../components/Player'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

GamePage.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired,
  onPlayerUpdate: PropTypes.func.isRequired,
  path: PropTypes.string,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onClick,
  onPlayerUpdate,
}) {
  let gamePath = useHistory()
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          onMinus={() => onPlayerUpdate(index, -1)}
          onPlus={() => onPlayerUpdate(index, 1)}
          key={name}
          name={name}
          score={score}
        />
      ))}
      <Button onClick={onResetScores} color="red">
        Reset scores
      </Button>
      <Button onClick={handleEndGame} color="white">
        End game
      </Button>
    </Grid>
  )
  function handleEndGame() {
    const path = gamePath.push('/history')
    onClick(path)
  }
}

const Grid = styled.section`
  display: grid;
  align-content: start;
  gap: 20px;
`
