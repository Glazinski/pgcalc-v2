import styled from 'styled-components';
import { Nav, Alink } from '../styledComp/animations';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  padding: 0 3rem;
`;

export const StyledNav = styled(Nav)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.level10};
  background-color: #fff;
`;

export const StyledLink = styled(Alink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.secondaryDark};

  position: ${({ bottom }) => (bottom === 1 ? 'fixed' : null)};
  bottom: ${({ bottom }) => (bottom === 1 ? '0' : null)};
  left: ${({ bottom }) => (bottom === 1 ? '0' : null)};
  background-color: ${({ bottom }) => (bottom === 1 ? `#F3F3F3` : null)};
  color: ${({ bottom }) => (bottom === 1 ? `#00669E` : null)};
`;
