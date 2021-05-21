import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
/*
import './Button.css'
export default function Button({ onClick, children, isActive }) {
  return (
    <button className={isActive ? 'Button active' : 'Button'} onClick={onClick}>
      {children}
    </button>
  )
}*/

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
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

function Button(props) {
  return <ButtonStyled {...props} />
}

export default Button
