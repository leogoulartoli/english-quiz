import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../../db'

import '../css/main.css'

const theme = db.theme;

const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', sans-serif;
    // Deixa branco no começo
    color: ${theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
