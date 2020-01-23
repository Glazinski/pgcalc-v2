import styled, { css } from 'styled-components';
import { Nav, NavList, Alink } from '../styledComp/animations';
import media from '../../utils';

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
  text-align: center;
  align-items: center;
  flex-direction: row;
`;

export const StyledLinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30px;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-right: 2rem;

  :hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: 0 0 0.3rem ${({ theme }) => theme.boxShadow};
    cursor: pointer;

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
  }

  span {
    color: ${({ theme }) => theme.colors.secondaryDark};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    transition: color 0.3s ease-in-out 0.1s;
  }
`;

export const StyledLinkList = styled(NavList)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 230px;
  list-style: none;
  top: 40px;
  right: 0;
`;

export const StyledLink = styled(Alink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.secondaryDark};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out 0.1s,
  box-shadow 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ bottom }) => bottom
    && css`
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #f3f3f3;
      color: #00669e;
    `}

  ${media.tablet`
    ${({ unique }) => (unique
    ? css`
      display: inline-block;
      height: 100%;
      padding: 0.5rem 0;
      font-size: ${({ theme }) => theme.fontSize.s};
      background-color: ${({ theme }) => theme.colors.primaryLight};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 0.3rem ${({ theme }) => theme.boxShadow};

      :hover {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    `
    // For links next to Matury
    : css`
      width: auto;
      height: 30px;
      padding: 0;
      color: ${({ theme }) => theme.colors.secondaryDark};
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: bold;
      margin-right: 2rem;

      :hover {
        background-color: ${({ theme }) => theme.colors.primaryLight};
        color: ${({ theme }) => theme.colors.white};
      }
    `)}
      
    :hover {
      cursor: pointer;
      
      box-shadow: 0 0 0.3rem ${({ theme }) => theme.boxShadow};
    }
  `}
`;

export const StyledLinkTitle = styled(Alink)`
  text-decoration: none;
`;
