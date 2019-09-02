import styled, { css } from 'styled-components';
import { Nav, Alink } from '../styledComp/animations';
import { media } from '../../utils/';

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

export const StyledNavDekstop = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
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

  ${({ bottom }) =>
    bottom &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #f3f3f3;
      color: #00669e;
    `}

  ${media.tablet`
    height: inherit;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: theme.colors.secondaryDark};
  `}
`;

export const LinksContainer = styled.div``;
