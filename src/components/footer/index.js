/* global window, document */

import { Link } from "gatsby";
import React, { useState, useEffect } from "react";

import mainLogo from "../../../content/images/page-logo.svg";
import debounce from "../../utilities/debounce";
import useMainNav from "../../hooks/useSiteNav";

import { Container } from "../common-styles";
import { FooterWrapper, Logo } from "./footer-styles";

/** ***************************************************************************
 *  Footer Component
 *************************************************************************** */

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <img src={mainLogo} alt="" />
        <div>
          Lots of footer content... Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis
          euismod semper. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare
          vel eu leo.
        </div>
        <div>© {new Date().getFullYear()}</div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
