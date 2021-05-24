import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper>
      <p>{name}</p>
      <div>
        <Button isActive onClick={onMinus}>
          -
        </Button>
        <Score isNegative={isNegative(score)}>{score}</Score>
        <Button isActive onClick={onPlus}>
          +
        </Button>
      </div>
    </Wrapper>
  )
  function isNegative(score) {
    if (score < 0) {
      return true
    }
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
  }

  p {
    text-transform: capitalize;
  }
`
const Score = styled.span`
  text-align: center;
  font-size: 16px;
  color: ${props => (props.isNegative ? 'red' : 'steelblue')};
  font-family: sans-serif;
`
