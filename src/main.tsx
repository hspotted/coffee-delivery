import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CheckoutProvider } from './contexts/checkout-context'

import { Router } from './routes'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CheckoutProvider>
          <Router />
        </CheckoutProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
