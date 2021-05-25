import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'
import { NavLink } from 'react-router-dom'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ name, path, disabled }) => (
        <NavButton
          exact
          component={NavLink}
          key={name}
          to={path}
          disabled={disabled}
          color="white"
        >
          {name}
        </NavButton>
      ))}
    </Nav>
    /* 
      {pages.map(({ title, path }) => (
        <NavButton
          key={id}
          isActive={currentPageId === id}
          onClick={() => onNavigate(id)}
          color="white"
        >
          {title.slice(0, 1).toUpperCase() + title.slice(1)}
        </NavButton>
      ))}
    */
  )
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const NavButton = styled(Button)`
  border-radius: 0;
  width: 100%;
`
