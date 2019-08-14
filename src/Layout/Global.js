import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Global = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {props.children}
    </>
  </ThemeProvider>
);

export default Global;
