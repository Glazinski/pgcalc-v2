import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: ${({ theme, xl }) => (xl ? theme.fontSize.xl : theme.fontSize.s)};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ pad }) => (pad ? '3rem' : null)};
  pointer-events: ${({ pointer }) => (pointer ? 'none' : null)};
  margin-bottom: ${({ mb }) => (mb ? '2rem' : null)};

  ${({ theme, square }) => square && theme.square};
`;
