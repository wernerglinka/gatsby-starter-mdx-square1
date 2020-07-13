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
 * - uses page transitions CSSTransition from react-transitions
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

  // hide topbar when user scrolls down the page
  const [hideTopbar, setHideTopbar] = useState(false);
  const [activeSlug, setActiveSlug] = useState("");

  const tempShowTopbar = () => {
    setHideTopbar(false);
  };

  const tempHideTopbar = () => {
    setHideTopbar(true);
  };

  // hideTopbar is set/unset with the page scrolling down and Waypoint sets "makeNavFixed"
  // If a topbar exists, that mean that the topbar has scrolled out of the viewport.
  // This means that the fixed top position of the mega menu panes needs adjustment as the
  // topbar is not there anymore.
  // 1 If "hideTopbar", check is the page has a topbar
  // 2 if a Topbar exists cache the page slug
  // 3 remove the slug from the topbarsList. This will temporarily reset "showTopbar"
  // since "showTopbar is only used to calculate the top position of the mega menu panes
  // this is ok
  // 1 if "!hideTopbar" and we have a pageslug cached we add the pageslug back to the
  // topbarsList

  useEffect(() => {
    if (hideTopbar) {
      if (topbarsList.includes(pageSlug)) {
        // store active slug temporarily
        setActiveSlug(pageSlug);
        // remove slug from list
        removeTopbar(pageSlug);
      }
    } else if (activeSlug) {
      // add slug back to list'
      setTopbarsList([...topbarsList, activeSlug]);
    }
  }, [hideTopbar]);

  // if the current page slug is not in the list no top message
  const showTopbar = children.props.pageContext.allTopbarPages ? topbarsList.includes(pageSlug) : false;

  // get page banner properties
  const { hasBanner, banner, pageTitle } = children.props.pageContext.fields.pageIntroduction;

  // manage scroll state, stickyness of the main nav and visibility of the to top button
  const [scrollState, setScrollState] = useState({
    stickyMainNav: false,
    toTopVisible: false,
  });

  const hideToTopButton = () => {
    setScrollState({ ...scrollState, toTopVisible: false });
  };

  const showToTopButton = () => {
    setScrollState({ ...scrollState, toTopVisible: true });
  };

  const makeNavFixed = () => {
    setScrollState({ ...scrollState, stickyMainNav: true });
    tempHideTopbar();
  };

  const makeNavStatic = () => {
    setScrollState({ ...scrollState, stickyMainNav: false });
    tempShowTopbar();
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
