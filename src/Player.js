import './Player.css'
import PropTypes from 'prop-types'
import Button from './Button'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      <p>{name}</p>
      <div>
        <Button isActive={false} onClick={onMinus}>
          -
        </Button>
        <p>{score}</p>
        <Button isActive={false} onClick={onPlus}>
          +
        </Button>
      </div>
    </section>
  )
}
