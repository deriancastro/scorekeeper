import React from 'react'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import GlobalStyles from '../src/GlobalStyles'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <GlobalStyles />
      <Story />
    </MemoryRouter>
  )
]