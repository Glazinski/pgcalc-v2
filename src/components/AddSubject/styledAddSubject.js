import styled from 'styled-components';
import { List } from '../styledComp/animations';

export const StyledAddButton = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 10;

  :hover {
    cursor: pointer;
  }

  :focus {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
  }
`;

export const StyledWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: -145px;
  right: 0;
  width: 127px;
  height: 127px;
  background-color: black;
  box-shadow: 0 0.5rem 2rem ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: start;
  padding: 2rem;
  z-index: -10;
`;

export const StyledItem = styled.div`
  width: 100%;

  :hover h2 {
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
