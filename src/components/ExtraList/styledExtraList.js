import styled from 'styled-components';
import { media } from '../../utils';
// This might be the footer
export const StyledWrapper = styled.div`
  ${media.desktop`
    grid-row: 1 / -1;
    grid-column: 3;
  `}
`;

export const StyledInnerText = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  text-align: center;
`;

export const StyledText = styled.p`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  word-spacing: 0.5rem;
  letter-spacing: 0.5px;
`;
