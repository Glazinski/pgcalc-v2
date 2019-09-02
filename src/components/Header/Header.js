import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useMediaPredicate } from 'react-media-hook';
import {
  StyledHeader,
  StyledNav,
  StyledNavDekstop,
  StyledLink
} from './styledHeader';
import { H1 } from '../styledComp';
import { navData, pageTitle, rulesLink } from '../../data/navData';
import HamburgerMenu from './HamburgerMenu';
import NowaMaturaPage from '../../pages/nowaMatura';
import StaraMaturaPage from '../../pages/staraMatura';
import MaturaIBPage from '../../pages/maturaIB';

const Header = props => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };

  const biggerThan800 = useMediaPredicate('(min-width: 800px)');

  const mobileNav = (
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
  );

  const desktopNav = (
    <StyledNavDekstop>
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
    </StyledNavDekstop>
  );

  return (
    <Router>
      <StyledHeader>
        <div style={{ width: '50%' }}>
          <H1>{pageTitle}</H1>
        </div>

        <HamburgerMenu checked={checked} handleChecked={handleChecked} />

        {biggerThan800 ? desktopNav : mobileNav}
      </StyledHeader>
      <Route
        path="/"
        exact
        render={() => (
          <NowaMaturaPage
            handleConfigInputChange={props.handleConfigInputChange}
            handleItemClick={props.handleItemClick}
          />
        )}
      />
      <Route
        path="/stara-matura"
        render={() => (
          <StaraMaturaPage
            handleConfigInputChange={props.handleConfigInputChange}
            handleItemClick={props.handleItemClick}
          />
        )}
      />
      <Route
        path="/matura-miedzynarodowa"
        render={() => (
          <MaturaIBPage
            handleConfigInputChange={props.handleConfigInputChange}
            handleItemClick={props.handleItemClick}
          />
        )}
      />
    </Router>
  );
};

export default Header;
