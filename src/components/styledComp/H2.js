import styled from 'styled-components';

export const H2 = styled.h2`
  position: relative;
  color: ${({ theme, black }) =>
    black ? theme.colors.black : theme.colors.secondaryDark};
  color: ${({ theme, ter }) => (ter ? theme.colors.tertiary : null)};

  font-size: ${({ theme, medium }) =>
    medium ? theme.fontSize.l : theme.fontSize.s};

  font-size: ${({ theme, xl }) => (xl ? theme.fontSize.xl : null)};

  font-weight: ${({ theme, regular }) =>
    regular ? theme.fontWeight.regular : theme.fontWeight.bold};

  margin-top: ${({ mt }) => (mt ? '2rem' : null)};
  margin-bottom: ${({ mb }) => (mb ? '2rem' : null)};

  ${({ theme, square }) => square && theme.square};
`;
