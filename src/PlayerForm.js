import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <Form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add Player:
        <input name="name" type="text" placeholder="Player name" />
      </label>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}

const Form = styled.form`
  label {
    display: grid;
    gap: 10px;
  }

  input {
    border-radius: 8px;
  }
`
