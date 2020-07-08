/* global window, document */

import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import mainLogo from "../../../content/images/page-logo.svg";
import debounce from "../../utilities/debounce";
import useMainNav from "../../hooks/useSiteNav";

import MainNavDesktop from "../main-navigation";

import { Container, Hamburger } from "../common-styles";
import { HeaderInner, HeaderWrapper, NavBar, Logo, MainMenu, MobileMenu } from "./header-styles";

/** ***************************************************************************
 *  Header Component
 *************************************************************************** */

const Header = ({ isSticky, hasOffset }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [isSmallScreen, updateScreenSize] = useState();
  const mainNavLinks = useMainNav();

  const MOBILE_BP = 767;

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= MOBILE_BP) {
      updateScreenSize(false);
      setMobileMenu(false);
    } else {
      updateScreenSize(true);
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
    <HeaderWrapper isFixed={isSticky}>
      <HeaderInner>
        <Container>
          <NavBar>
            <Link to="/">
              <Logo src={mainLogo} alt="" />
            </Link>

            {!isSmallScreen && <MainNavDesktop />}

            <Hamburger className={showMobileMenu && "active"} onClick={toggleMobileMenu}>
              <span />
            </Hamburger>

            {isSmallScreen && (
              <MobileMenu className={showMobileMenu && "active"}>
                <ul>
                  {mainNavLinks.map(link => (
                    <li key={link.url}>
                      <Link to={link.url} onClick={toggleMobileMenu}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileMenu>
            )}
          </NavBar>
        </Container>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

Header.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  hasOffset: PropTypes.bool.isRequired,
};
