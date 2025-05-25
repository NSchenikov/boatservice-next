import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #00BFFF;
    --background: #F0F8FF;
    --text: #003366;
    --footer-bg: #E0E0E0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
    background-color: var(--background);
    color: var(--text);
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  section {
    padding: 100px 20px;
  }
`;

export default GlobalStyle;
