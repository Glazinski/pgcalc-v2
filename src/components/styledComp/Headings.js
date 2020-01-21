import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
`;

export const H2 = styled.h2`
  position: relative;
  color: ${({ theme, black }) => (black ? theme.colors.black : theme.colors.secondaryDark)};
  color: ${({ theme, ter }) => (ter ? theme.colors.tertiary : null)};

  font-size: ${({ theme, medium }) => (medium ? theme.fontSize.l : theme.fontSize.s)};

  font-size: ${({ theme, xl }) => (xl ? theme.fontSize.xl : null)};

  font-weight: ${({ theme, regular }) => (regular ? theme.fontWeight.regular : theme.fontWeight.bold)};

  margin-top: ${({ mt }) => (mt ? '2rem' : null)};
  margin-bottom: ${({ mb }) => (mb ? '2rem' : null)};
  text-align: ${({ left }) => (left ? 'left' : null)};


  ${({ theme, square }) => square && theme.square};
`;

export const H3 = styled.h3`
  font-size: ${({ theme, xl }) => (xl ? theme.fontSize.xl : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ pad }) => (pad ? '3rem' : null)};
  pointer-events: ${({ pointer }) => (pointer ? 'none' : null)};
  margin-bottom: ${({ mb }) => (mb ? '2rem' : null)};

  white-space: pre-wrap;

  ${({ theme, square }) => square && theme.square};
`;
