import { createGlobalStyle } from 'styled-components';
import { breakpoints, minWidth } from './media';

const GlobalStyle = createGlobalStyle`
  html {
    --content-x-margin: ${({ theme }) => theme.spacing.s};

    ${minWidth(breakpoints.s)} {
      --content-x-margin: ${({ theme }) => theme.spacing.m};
    }

    ${minWidth(breakpoints.m)} {
      --content-x-margin: ${({ theme }) => theme.spacing.l};
    }
  }

  html * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", 'arial', sans-serif;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    font-size: 16px;

    ${minWidth(breakpoints.l)} {
      font-size: 18px;
    }
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
