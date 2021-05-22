import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import LabeledInput from '../components/LabeledInput'
import { useHistory } from 'react-router-dom'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  path: PropTypes.string,
}

export default function CreatePage({ onSubmit }) {
  let gamePath = useHistory()
  return (
    <Grid>
      <Form onSubmit={handleSubmit}>
        <LabeledInput
          label="Name of game:"
          name="name"
          placeholder="e.g. Carcassonne"
        />
        <LabeledInput
          label="Player names:"
          name="players1"
          placeholder="e.g. Jane, John"
        />
        <Button color="white">Create game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players1
    const nameOfGame = nameInput.value
    const players1 = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const players2 = players1.filter(player => player.name !== '')
    const players = getUniquelistBy(players2, 'name')
    console.log(players)
    if (players.length >= 2) {
      const game = {
        nameOfGame,
        players,
      }
      const path = gamePath.push('/game')
      onSubmit(game, path)
    } else {
      window.alert('Sorry... but there must be a minimum of two players 😉')
    }

    function getUniquelistBy(arr, key) {
      return [...new Map(arr.map(item => [item[key], item])).values()]
    }
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const Form = styled.form`
  display: grid;
  gap: 12px;
  label {
    display: grid;
    gap: 4px;
  }
  input {
    padding: 4px;
  }
`
