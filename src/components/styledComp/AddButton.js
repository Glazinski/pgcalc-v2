import styled from 'styled-components';

export const StyledAddButton = styled.button`
  position: fixed;
  appearance: none;
  width: 38px;
  height: 38px;
  bottom: 40px;
  border-radius: 100px;
  border: none;
  right: 20px;
  box-shadow: 0 0 1rem ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    cursor: pointer;
  }

  :focus {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
  }
`;
