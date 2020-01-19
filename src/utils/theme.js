import { css } from 'styled-components';

const theme = {
  colors: {
    primary: '#00669E',
    primaryDark: '#005685',
    primaryLight: '#0078ba',
    secondary: '#D2D2D2',
    secondaryLight: '#F3F3F3',
    secondaryDark: '#707070',
    tertiary: '#4A4A4A',
    black: '#000',
    white: '#fff',
    error: '#b50706',
  },
  boxShadow: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '4px',
  fontSize: {
    s: '1.5rem',
    m: '1.8rem',
    l: '2rem',
    xl: '2.3rem',
  },
  fontWeight: {
    regular: '400',
    bold: 'bold',
  },
  zIndex: {
    level10: '10',
    level15: '15',
    level20: '20',
    level25: '25',
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
  `,
  scrollbar: css`
    ::-webkit-scrollbar {
      width: 4px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #707070;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
  `,
};

export default theme;
