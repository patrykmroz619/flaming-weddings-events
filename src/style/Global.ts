import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    font-family: "Lato", 'arial', sans-serif;
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    body {
      font-size: 18px;
    }
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
