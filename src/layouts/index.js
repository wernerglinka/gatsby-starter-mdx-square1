/* global window */

import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import { MDXProvider } from "@mdx-js/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import { FiArrowUp } from "react-icons/fi";
import { Waypoint } from "react-waypoint";
import theme from "../styles/theme";
import Transition from "../components/transition";

import Head from "../components/head";
import TopMsg from "../components/page-top-message";
import Header from "../components/page-header";
import Footer from "../components/page-footer";

// import shortcodes
import InlineMessage from "../components/shortcodes/inline-message";

import useSiteMetadata from "../hooks/useSiteMetadata";

import { globalStyles } from "../styles/global";

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
 * - uses page transitions with framer-motion
 *
 *  Notice the PageBg component. This is necessary so the footer is not
 *  shinning through when the page is faded-in
 *************************************************************************** */

const StandardPage = props => {
  const { children } = props;
  const [showTopbar, hideTopbar] = useState(true);
  const siteMetadata = useSiteMetadata();

  const shortcodes = { InlineMessage };

  const hasTopMessage = !!children.props.pageContext.fields.topMessage;
  const topMessage = children.props.pageContext.fields.topMessage ? children.props.pageContext.fields.topMessage : null;

  const [scrollState, setScrollState] = useState({
    stickyMainNav: false,
    toTopVisible: false,
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      // check if page is scrolled down after reload and invoke waypoint if necessary
      const offset = window.pageYOffset;
      if (offset > 260) {
        setScrollState({ ...scrollState, toTopVisible: true });
      }
      if (offset > 79) {
        setScrollState({ ...scrollState, stickyMainNav: true });
      }
    }, 500);

    return () => window.clearTimeout(timeout);
  }, []);

  const hideToTopButton = () => {
    setScrollState({ ...scrollState, toTopVisible: false });
  };

  const showToTopButton = () => {
    setScrollState({ ...scrollState, toTopVisible: true });
  };

  const makeNavFixed = () => {
    setScrollState({ ...scrollState, stickyMainNav: true });
  };

  const makeNavStatic = () => {
    setScrollState({ ...scrollState, stickyMainNav: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <Head metaData={siteMetadata} />

      {hasTopMessage && showTopbar ? (
        <>
          <TopMsg message={topMessage} hideTopbar={hideTopbar} />
          <Waypoint onEnter={makeNavStatic} onLeave={makeNavFixed} />
        </>
      ) : (
        <Waypoint onEnter={makeNavStatic} onLeave={makeNavFixed} />
      )}

      <Header siteTitle={siteMetadata.title} isSticky={scrollState.stickyMainNav} />

      <MDXProvider components={shortcodes}>
        <PageBg>
          {/* waypoint for to top botton */}
          <Waypoint
            scrollableAncestor={typeof window === "undefined" ? null : window}
            onEnter={hideToTopButton}
            onLeave={showToTopButton}
          />
          <Transition {...props}>{props.children}</Transition>
        </PageBg>
      </MDXProvider>

      <Footer />

      <ToTop href="#pageTop" className={scrollState.toTopVisible ? "isVisible" : null}>
        <FiArrowUp />
      </ToTop>

      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

StandardPage.propTypes = {
  children: PropType.node.isRequired,
  location: PropType.shape().isRequired,
};

export default StandardPage;
