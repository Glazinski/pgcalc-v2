import styled from 'styled-components';
import { media } from '../../utils/';

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  i {
    font-size: 3.5rem;

    :hover {
      cursor: pointer;
    }
  }

  ${media.tablet`
    padding: 2rem;
  `}
`;
