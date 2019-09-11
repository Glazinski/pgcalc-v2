import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import { useMediaPredicate } from 'react-media-hook';
import {
  StyledHeader,
  StyledNav,
  StyledNavDekstop,
  StyledLink,
  StyledLinkContainer,
  StyledLinkList,
  StyledLinkTitle
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

  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => {
    setIsHover(!isHover);
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
      <StyledLinkContainer
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <span>Matury</span>
        <PoseGroup>
          {isHover && (
            <StyledLinkList key="209389sd">
              {navData.map(
                item =>
                  item.unique && (
                    <StyledLink
                      as={Link}
                      key={item.id}
                      onClick={handleChecked}
                      to={`/${item.link}`}
                      style={item.style}
                      unique={1}
                    >
                      {item.content}
                    </StyledLink>
                  )
              )}
            </StyledLinkList>
          )}
        </PoseGroup>
      </StyledLinkContainer>
      {navData.map(
        item =>
          !item.unique && (
            <StyledLink
              as={Link}
              key={item.id}
              onClick={handleChecked}
              to={`/${item.link}`}
            >
              {item.content}
            </StyledLink>
          )
      )}
    </StyledNavDekstop>
  );

  return (
    <Router>
      <StyledHeader>
        <div style={{ width: '50%' }}>
          <StyledLinkTitle href="/">
            <H1>{pageTitle}</H1>
          </StyledLinkTitle>
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
