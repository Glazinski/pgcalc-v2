import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ pad }) => (pad ? '3rem' : null)};
`;
