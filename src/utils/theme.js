import { css } from 'styled-components';

export const theme = {
  colors: {
    primary: '#00669E',
    secondary: '#D2D2D2',
    secondaryLight: '#F3F3F3',
    secondaryDark: '#707070',
    black: '#000'
  },
  borderRadius: '4px',
  fontSize: {
    s: '1.5rem',
    l: '2rem',
    xl: '2.3rem'
  },
  fontWeight: {
    regular: '400',
    bold: 'bold'
  },
  zIndex: {
    level10: '10',
    level15: '15',
    level20: '20'
  },
  square: css`
    ::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 24px;
      height: 24px;
      top: -7px;
      left: -9px;
      background-color: #d2d2d2;
      z-index: -5;
    }
  `
};
