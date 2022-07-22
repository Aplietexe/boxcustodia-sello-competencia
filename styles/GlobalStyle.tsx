import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --accent-light: #4a50fd;
    --accent-dark: #2e4765;

    --gray-dark: #6c757d;
    --gray-light: #f4f6fa;

    --border-radius: 18px;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0
  }
`

export default GlobalStyle
