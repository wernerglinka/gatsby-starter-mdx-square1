/* global window */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import styled from "@emotion/styled";
import { FiArrowUp } from "react-icons/fi";

import Head from "../head";
import Header from "../header";
import useToTop from "../../hooks/useToTop";

import "normalize-scss";
import "./layout.scss";

import useSiteMetadata from "../../hooks/useSiteMetadata";

// get shortcodes
import InlineMessage from "../shortcodes/inline-message";
const shortcodes = { InlineMessage };

const Page = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const ToTop = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: transparent;
  padding: 0;
  cursor: pointer;
  background-color: #000;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.isVisible {
    opacity: 1;

    &:hover {
      opacity: 0.6;
    }
  }

  svg {
    display: block;
    position: relative;
    top: 0;
    width: 24px;
    height: auto;
    color: #fff;
    margin: 0 auto;
  }
`;

/** ***************************************************************************
 *  Default Page Layout
 *************************************************************************** */

const Layout = ({ children }) => {
  const toTopIsVisible = useToTop();
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Head metaData={siteMetadata} />
      <Header id="pageTop" siteTitle={siteMetadata.title} />

      <MDXProvider components={shortcodes}>
        <Page className="hasTransition">{children}</Page>
      </MDXProvider>
      <footer>© {new Date().getFullYear()}</footer>

      <ToTop to="#pageTop" className={toTopIsVisible ? "isVisible" : null}>
        <FiArrowUp />
      </ToTop>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
