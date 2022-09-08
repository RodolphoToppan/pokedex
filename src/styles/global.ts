import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root { 
  --background: #292929;
  --header: #41414a;
  --details: #f6bd20;
  --white: #FFFFFF;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

/* html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
} */

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
  color: var(--white);
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`