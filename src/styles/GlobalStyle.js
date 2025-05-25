import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
    background-color: #fff;
    color: #222;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
