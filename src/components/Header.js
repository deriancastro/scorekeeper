import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const HeaderStyled = styled.h2`
  display: grid;
  place-items: center;
  padding: 8px;
  margin: 0;
  font-size: 1.2;
  font-weight: 500;
`
Header.propTypes = {
  children: PropTypes.node,
}

function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

export default Header
