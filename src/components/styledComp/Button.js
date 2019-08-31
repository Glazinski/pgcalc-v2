import styled from 'styled-components';

export const StyledButton = styled.button`
  appearance: none;
  width: 95px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colors.secondaryLight};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: ${({ mt }) => (mt ? '3rem' : null)};

  :hover {
    cursor: pointer;
  }
`;
