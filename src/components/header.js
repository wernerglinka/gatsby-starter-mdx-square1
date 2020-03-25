/* global window, document */

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import mainLogo from "../images/page-logo.svg";
import { Container, Hamburger } from "./common-styles";
import debounce from "../utilities/debounce";
import useMainNav from "../hooks/useSiteNav";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0 20px;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled.img`
  margin: 0;
`;

const MainMenu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0 20px;

    > a {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  @media (max-width: ${props => props.theme.tabletBreakpoint}) {
    position: fixed;
    top: 80px;
    right: -330px;
    width: 320px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.95);
    transition: all 0.5s ease-in;

    li {
      display: block;
      padding-bottom: 30px;

      > a {
        font-size: 16px;
      }
    }

    &.active {
      transform: translate(-330px);
    }
  }
`;

/** ***************************************************************************
 *  Header Component
 *************************************************************************** */

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const mainNavLinks = useMainNav();
  const MOBILE_BP = 767;

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= MOBILE_BP) {
      setMobileMenu(false);
    }
  };

  // check screen size on resize event
  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize, 10));
    return () => window.removeEventListener("resize", debounce(handleResize, 10));
  });

  // check screen size on initial render
  useEffect(() => {
    handleResize();
  }, []);

  // prevent scrolling when mobile menu is active
  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [showMobileMenu]);

  const toggleMobileMenu = () => {
    setMobileMenu(!showMobileMenu);
  };

  return (
    <HeaderWrapper id="pageTop">
      <Container>
        <NavBar>
          <Link to="/">
            <Logo src={mainLogo} alt="" />
          </Link>

          <MainMenu className={showMobileMenu ? "active" : ""}>
            {mainNavLinks.map(link => (
              <li key={link.url}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </MainMenu>

          <Hamburger className={showMobileMenu ? "active" : ""} onClick={toggleMobileMenu}>
            <span />
          </Hamburger>
        </NavBar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
