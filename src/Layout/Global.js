import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../utils/theme';

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

const Global = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

Global.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Global;
