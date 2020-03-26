/* global window, document */

import { Link } from "gatsby";
import React, { useState, useEffect } from "react";

import mainLogo from "../../images/page-logo.svg";
import debounce from "../../utilities/debounce";
import useMainNav from "../../hooks/useSiteNav";

import { Container, Hamburger } from "../common-styles";
import { HeaderWrapper, NavBar, Logo, MainMenu } from "./header-styles";

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
