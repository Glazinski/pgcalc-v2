import React from 'react';
import { StyledHeader } from './styledHeader';
import { H1 } from '../styledComp/H1';
import Nav from '../Nav/Nav';

const Header = () => (
  <StyledHeader>
    <H1>Kalkulator Punktów</H1>
    <Nav />
  </StyledHeader>
);

export default Header;
