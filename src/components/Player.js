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
        <p>{score}</p>
        <Button isActive onClick={onPlus}>
          +
        </Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 300px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    text-align: center;
  }

  p {
    text-align: center;
    text-transform: capitalize;
    font-size: 16px;
    color: steelblue;
    font-family: sans-serif;
  }
`
