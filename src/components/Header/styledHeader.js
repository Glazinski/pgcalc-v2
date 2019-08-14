import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  padding: 0 3rem;
`;
