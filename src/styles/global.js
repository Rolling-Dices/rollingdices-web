import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #121116;
    color: #F7F9F9;
    font-family: 'Righteous', cursive;
    -webkit-font-smoothing: antialiased;
  }
`