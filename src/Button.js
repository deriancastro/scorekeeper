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
}
