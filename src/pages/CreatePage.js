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
          name="players"
          placeholder="e.g. Jane, John"
        />
        <Button>Create game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }

    const path = gamePath.push('/game')

    onSubmit(game, path)
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
