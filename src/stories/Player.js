import './Player.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from './Button'

Player.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}

export default function Player({ name, score }) {
  const [newScore, setNewScore] = useState(score)
  return (
    <section className="Player">
      <p>{name}</p>
      <div>
        <Button
          id="sub"
          isActive={false}
          onClick={() => setNewScore(newScore - 1)}
        >
          -
        </Button>
        <p>{newScore}</p>
        <Button
          id="add"
          isActive={true}
          onClick={() => setNewScore(newScore + 1)}
        >
          +
        </Button>
      </div>
    </section>
  )

  /*function handleClick(event) {
    const id = event.target.id
    console.log(id)
    setNewScore(id === 'add' ? newScore + 1 : newScore - 1)
  }*/
}
