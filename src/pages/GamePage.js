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
  onPlayerUpdate: PropTypes.func.isRequired,
  handleEndGame: PropTypes.func.isRequired,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  handleEndGame,
  onPlayerUpdate,
}) {
  let path = useHistory()
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
      <Button onClick={handleClick} color="white">
        End game
      </Button>
    </Grid>
  )
  function handleClick(event) {
    handleEndGame(event)
    path.push('/history')
  }
}

const Grid = styled.section`
  display: grid;
  align-content: start;
  gap: 20px;
`
