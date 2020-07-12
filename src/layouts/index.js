/* global window */

import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "emotion-theming";
import { FiArrowUp } from "react-icons/fi";
import { Waypoint } from "react-waypoint";
import { CSSTransition } from "react-transition-group";
import theme from "../styles/theme";
import Head from "../components/head";
import TopMsg from "../components/page-top-message";
import Header from "../components/page-header";
import Footer from "../components/page-footer";
// import shortcodes
import InlineMessage from "../components/shortcodes/inline-message";
import TopbarContext from "../contexts/topbar-context";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { ToTop, PageBg } from "./layout-styles";
import PageTransition from "../components/page-transition";

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

const DefaultLayout = ({ children, location }) => {
  const siteMetadata = useSiteMetadata();
  const shortcodes = { InlineMessage };
  const topMessage = children.props.pageContext.fields.topMessage || null;
  // current page slug/path
  const pageSlug = children.props.path;

  // manage topbars for all pages that have one
  const [topbarsList, setTopbarsList] = useState([]);

  // set list after first render
  useEffect(() => {
    setTopbarsList(children.props.pageContext.allTopbarPages);
  }, []);

  const removeTopbar = slug => {
    setTopbarsList(topbarsList.filter(topbar => topbar !== slug));
  };

  // if the current page slug is not in the list no top message
  const showTopbar = children.props.pageContext.allTopbarPages ? topbarsList.includes(pageSlug) : false;

  // get page banner properties
  const { hasBanner, banner, pageTitle } = children.props.pageContext.fields.pageIntroduction;

  // manage scroll state, stickyness of the main nav and visibility of the to top button
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

    // hideTopbar(true);

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
    <>
      <ThemeProvider theme={theme}>
        <TopbarContext.Provider value={showTopbar}>
          <Head metaData={siteMetadata} />

          <CSSTransition in={showTopbar} appear timeout={300} classNames="message" unmountOnExit>
            <TopMsg message={topMessage} removeTopbar={removeTopbar} slug={pageSlug} />
          </CSSTransition>

          <Waypoint onEnter={makeNavStatic} onLeave={makeNavFixed} />

          <div id="pageTop" />

          <Header siteTitle={siteMetadata.title} isSticky={scrollState.stickyMainNav} />
          <MDXProvider components={shortcodes}>
            <PageBg className={hasBanner ? "hasBanner" : null}>
              {/* waypoint for to top botton */}
              <Waypoint
                scrollableAncestor={typeof window === "undefined" ? null : window}
                onEnter={hideToTopButton}
                onLeave={showToTopButton}
              />

              <PageTransition location={location}>{children}</PageTransition>
            </PageBg>
          </MDXProvider>
          <Footer />
          <ToTop href="#pageTop" className={scrollState.toTopVisible ? "isVisible" : null}>
            <FiArrowUp />
          </ToTop>
        </TopbarContext.Provider>
      </ThemeProvider>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropType.shape().isRequired,
  location: PropType.shape().isRequired,
};

export default DefaultLayout;
