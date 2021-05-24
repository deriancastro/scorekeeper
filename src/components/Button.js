import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  padding: 12px;
  border: none;
  background: ${props => (props.isActive ? 'steelblue' : 'rgb(105, 190, 240)')};
  color: ${props => props.color};
  border-radius: 8px;

  //:hover {
  //background: hotpink;
  //}
`

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

function Button(props) {
  return <ButtonStyled {...props} />
}

export default Button
