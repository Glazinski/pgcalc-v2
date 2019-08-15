import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLink } from './styledHeader';
import { H1 } from '../styledComp/H1';
import { navData, pageTitle } from '../../data/navData';
import HamburgerMenu from './HamburgerMenu';
import index from '../../pages/index';
import staraMatura from '../../pages/staraMatura';

const Header = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Router>
      <StyledHeader>
        <H1>{pageTitle}</H1>

        <HamburgerMenu checked={checked} handleChecked={handleChecked} />
        <StyledNav pose={checked ? 'visible' : 'hidden'}>
          {navData.map(item => (
            <StyledLink
              key={item.id}
              onClick={handleChecked}
              to={`/${item.link}`}
            >
              {item.content}
            </StyledLink>
          ))}
        </StyledNav>
      </StyledHeader>

      <Route path="/" exact component={index} />
      <Route path="/stara-matura" component={staraMatura} />
    </Router>
  );
};

export default Header;
