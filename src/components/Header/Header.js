import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledLink } from './styledHeader';
import { H1 } from '../styledComp';
import { navData, pageTitle, rulesLink } from '../../data/navData';
import HamburgerMenu from './HamburgerMenu';
import NowaMaturaPage from '../../pages/nowaMatura';
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
              as={Link}
              key={item.id}
              onClick={handleChecked}
              to={`/${item.link}`}
            >
              {item.content}
            </StyledLink>
          ))}
          <StyledLink
            pose={checked ? 'visible' : 'hidden'}
            href={rulesLink.link}
            target="_blank"
            bottom={1}
          >
            {rulesLink.content}
          </StyledLink>
        </StyledNav>
      </StyledHeader>

      {/* <Route path="/" exact component={NowaMaturaPage} /> */}
      <Route path="/" exact render={() => <NowaMaturaPage />} />
      <Route path="/stara-matura" component={staraMatura} />
    </Router>
  );
};

export default Header;
