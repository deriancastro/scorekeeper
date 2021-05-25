import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

HistoryEntry.propTypes = {
  nameOfGame: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}

export default function HistoryEntry({ nameOfGame, players, timeStamp }) {
  return (
    <Grid>
      <div>
        <Title>{nameOfGame}</Title>
        <Date>{timeStamp}</Date>
      </div>
      <ul>
        {players.map(player => (
          <Player key={player.name}>
            <span>{player.name}</span>
            <Score isNegative={isNegative(player.score)}>{player.score}</Score>
          </Player>
        ))}
      </ul>
    </Grid>
  )
  function isNegative(score) {
    if (score < 0) {
      return true
    }
  }
}

const Grid = styled.section`
  display: grid;
  gap: 10px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;
  }
`
const Title = styled.h2`
  font-size: 1.1em;
  margin: 0.2em 0;
  text-transform: capitalize;
`
const Player = styled.li`
  display: flex;
  justify-content: space-between;

  span {
    text-transform: capitalize;
  }
`
const Score = styled.span`
  text-align: center;
  font-size: 16px;
  color: ${props => (props.isNegative ? 'red' : 'steelblue')};
  font-family: sans-serif;
`
const Date = styled.span`
  text-align: left;
`
