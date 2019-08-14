import React from 'react';
import styled from 'styled-components';

export const StyledHamburger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  cursor: pointer;

  div {
    position: relative;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    ::before,
    ::after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 22px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    ::before {
      top: 7.5px;
    }

    ::after {
      top: -7.5px;
    }
  }

  &:hover div {
    background-color: transparent;
    &::before {
      top: 0;
      transform: rotate(45deg);
    }
    &::after {
      top: 0;
      transform: rotate(-45deg);
    }
  }
`;

const StyledInput = styled.input`
  position: absolute;
  height: 30px;
  width: 30px;
`;

const HamburgerMenu = () => (
  <StyledHamburger>
    <div />
    <StyledInput type="checkbox" />
  </StyledHamburger>
);

export default HamburgerMenu;
