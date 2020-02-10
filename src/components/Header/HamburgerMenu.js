import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from '../../utils';

export const StyledHamburger = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  cursor: pointer;

  ${media.tablet`;
    display: none;
  `}

  ${({ checked }) => (checked
    ? css`
      position: fixed;
      z-index: 15;
      right: 30px;
    `
    : null)};

  div {
    position: relative;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: ${({ theme }) => theme.zIndex.level15};
    transition: background-color 0.2s ease-in-out;

    ::before,
    ::after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 22px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: transform 0.3s ease-in-out;
    }

    ::before {
      transform-origin: 0% 0%;
      top: -7.5px;
    }

    ::after {
      transform-origin: 0% 100%;
      top: 7.5px;
    }
  }
`;

const StyledInput = styled.input`
  position: absolute;
  height: 30px;
  width: 30px;
  z-index: ${({ theme }) => theme.zIndex.level20};
  opacity: 0;

  ${media.tablet`;
    display: none;
  `}

  &:checked ~ div {
    background-color: transparent;
    /* opacity: 0; */
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  :hover {
    cursor: pointer;
  }
`;

const HamburgerMenu = ({ checked, handleChecked }) => (
  <StyledHamburger checked={checked}>
    <StyledInput
      name="navigation"
      type="checkbox"
      checked={checked}
      onChange={handleChecked}
    />
    <div />
  </StyledHamburger>
);

HamburgerMenu.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChecked: PropTypes.func.isRequired,
};

export default HamburgerMenu;
