import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
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
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  :active {
    box-shadow: 0 0.7rem 1.2rem ${({ theme }) => theme.boxShadow};
  }
`;
