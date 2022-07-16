import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "routes"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/default"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
