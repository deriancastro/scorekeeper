import styled from 'styled-components/macro'
/*
import './Button.css'
import PropTypes from 'prop-types'


Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default function Button({ onClick, children, isActive }) {
  return (
    <button className={isActive ? 'Button active' : 'Button'} onClick={onClick}>
      {children}
    </button>
  )
}*/

const Button = styled.button`
  padding: 12px;
  border: none;
  background: ${props => (props.isActive ? 'steelblue' : 'rgb(105, 190, 240)')};
  color: ${props => props.color};
  border-radius: 8px;

  :hover {
    background: hotpink;
  }
`
export default Button
