/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { FiArrowUp } from "react-icons/fi";
import theme from "./theme";
import Transition from "../components/transition";

import Head from "../components/head";
import Header from "../components/header";
import Footer from "../components/footer";
import useToTop from "../hooks/useToTop";

// import shortcodes
import InlineMessage from "../components/shortcodes/inline-message";

import "normalize-scss";
import "./layout.scss";

import useSiteMetadata from "../hooks/useSiteMetadata";

const ToTop = styled.a`
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

const PageBg = styled.div`
  background-color: #fff;
  padding: 0 20px 50px;
  margin-bottom: 300px;
`;

/** ***************************************************************************
 *  Default Page Layout
 *
 * - uses ThemeProvider from emotion-theming
 * - uses MDXProvider to allow injection of shortcodes without importing them
 *
 *  Notice the PageBg component. This is necessary so the footer is not
 *  shinning through when the page is faded-in
 *************************************************************************** */

const StandardPage = ({ children, location }) => {
  const toTopIsVisible = useToTop();
  const siteMetadata = useSiteMetadata();

  const shortcodes = { InlineMessage };

  return (
    <ThemeProvider theme={theme}>
      <Head metaData={siteMetadata} />
      <Header siteTitle={siteMetadata.title} />

      <MDXProvider components={shortcodes}>
        <PageBg>
          <Transition location={location}>{children}</Transition>
        </PageBg>
      </MDXProvider>

      <Footer />

      <ToTop href="#pageTop" className={toTopIsVisible ? "isVisible" : null}>
        <FiArrowUp />
      </ToTop>
    </ThemeProvider>
  );
};

StandardPage.propTypes = {
  children: PropType.node.isRequired,
  location: PropType.shape().isRequired,
};

export default StandardPage;
