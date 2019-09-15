import styled from 'styled-components';
import { List } from '../styledComp/animations';

export const StyledSelect = styled.div`
  position: relative;
  padding: 0.3rem;
  width: 150px;
  height: 46px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }
`;

export const StyledInnerSelect = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'space-between')};
  align-items: center;
`;

export const StyledList = styled(List)`
  /* ${({ vis }) => (vis ? 'position: absolute' : 'display: none')}; */
  position: absolute;
  left: -5%;
  top: -20%;
  width: 110%;
  height: 200px;
  z-index: 52;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1rem 2rem ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
  overflow: auto;

  ${({ theme }) => theme.scrollbar};
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 20px;
  margin: 10px 0;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
`;
