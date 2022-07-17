import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors['base-text']};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 130%;
  }

  button { cursor: pointer; }

  a { text-decoration: none;}

  /* button:not(:disabled):hover { cursor: not-allowed; } */

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.purple};
    
    border-radius: 2rem;
  }

  .title-s {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  .title-m {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 31.2px;
  }

  .title-xl {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }

  .text-s {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  .text-m {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  .text-l {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
  }

  .tag {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    text-transform: uppercase;
  }
`
