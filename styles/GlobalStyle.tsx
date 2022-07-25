import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --accent-light: #253585;
    --accent-dark: #2e4765;
    --gray: #6c757d;

    --border-radius: 13px;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--accent-dark);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0
  }
`

export default GlobalStyle
