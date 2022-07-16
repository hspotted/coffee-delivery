import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App'

import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
