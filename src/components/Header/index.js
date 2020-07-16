import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import uniqid from 'uniqid';
import { PoseGroup } from 'react-pose';
import { useMediaPredicate } from 'react-media-hook';
import {
  StyledHeader,
  StyledNav,
  StyledNavDekstop,
  StyledLink,
  StyledLinkContainer,
  StyledLinkList,
  StyledLinkTitle,
} from './styledHeader';
import { H1 } from '../styledComp';
import { navData } from '../../data/navData';
import HamburgerMenu from './HamburgerMenu';
import NowaMaturaPage from '../../pages/nowaMatura';
import StaraMaturaPage from '../../pages/staraMatura';
import IbMaturaPage from '../../pages/maturaIB';

const Header = () => {
  const { pageTitle, rules, matury } = navData;

  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);

  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover(!isHover);

  const biggerThan800 = useMediaPredicate('(min-width: 800px)');

  const renderLinks = (unique, handleFn) => matury.map((item) => (
    <StyledLink
      as={Link}
      key={item.id}
      onClick={handleFn || null}
      to={`/${item.link}`}
      style={item.style}
      unique={unique ? 'true' : null}
    >
      {item.content}
    </StyledLink>
  ));

  const mobileNav = (
    <StyledNav pose={checked ? 'visible' : 'hidden'}>
      {renderLinks(false, handleChecked)}
      <StyledLink
        pose={checked ? 'visible' : 'hidden'}
        href={rules.link}
        target="_blank"
        bottom={1}
      >
        {rules.content}
      </StyledLink>
    </StyledNav>
  );

  const desktopNav = (
    <StyledNavDekstop>
      <StyledLink href={rules.link} target="_blank">
        Zasady
      </StyledLink>
      <StyledLinkContainer
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <span>Matury</span>
        <PoseGroup>
          {isHover && (
            <StyledLinkList key={uniqid()}>
              {renderLinks(true, false)}
            </StyledLinkList>
          )}
        </PoseGroup>
      </StyledLinkContainer>
    </StyledNavDekstop>
  );

  return (
    <Router>
      <StyledHeader>
        <div style={{ width: '50%' }}>
          <StyledLinkTitle as={Link} to="/">
            <H1>{pageTitle}</H1>
          </StyledLinkTitle>
        </div>

        <HamburgerMenu checked={checked} handleChecked={handleChecked} />
        {biggerThan800 ? desktopNav : mobileNav}
      </StyledHeader>
      <Switch>
        <Route path="/" exact component={NowaMaturaPage} />

        <Route path="/matura-miedzynarodowa" exact component={IbMaturaPage} />

        <Route path="/stara-matura" exact component={StaraMaturaPage} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Header;
