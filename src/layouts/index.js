/* global window */

import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import { MDXProvider } from "@mdx-js/react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { FiArrowUp } from "react-icons/fi";
import { Waypoint } from "react-waypoint";
import theme from "../styles/theme";

import Head from "../components/head";
import TopMsg from "../components/page-top-message";
import Header from "../components/page-header";
import Footer from "../components/page-footer";

import TopbarContext from "../contexts/topbar-context";

// import shortcodes
import InlineMessage from "../components/shortcodes/inline-message";

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

const pageTransition = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const topbarTransition = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
  const { children, location } = props;
  const siteMetadata = useSiteMetadata();
  const shortcodes = { InlineMessage };
  const topMessage = children.props.pageContext.fields.topMessage || null;
  const pageSlug = children.props.path;

  // manage topbars for all pages that have one
  const [topbarsList, setTopbarsList] = useState(children.props.pageContext.allTopbarPages);

  const removeTopbar = slug => {
    setTopbarsList(topbarsList.filter(topbar => topbar !== slug));
  };
  // if the current page slug is not in the list no top message
  const showTopbar = children.props.pageContext.allTopbarPages ? topbarsList.includes(pageSlug) : false;

  // get page banner properties
  const { hasBanner, banner, pageTitle } = children.props.pageContext.fields.pageIntroduction;

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

          <AnimatePresence>
            {showTopbar && (
              <motion.div variants={topbarTransition} initial="hidden" animate="visible" exit="exit">
                <TopMsg message={topMessage} removeTopbar={removeTopbar} slug={pageSlug} />
              </motion.div>
            )}
          </AnimatePresence>

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
              <AnimatePresence>
                <motion.main
                  key={location.pathname}
                  variants={pageTransition}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  {props.children}
                </motion.main>
              </AnimatePresence>
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

StandardPage.propTypes = {
  children: PropType.shape().isRequired,
  location: PropType.shape().isRequired,
};

export default StandardPage;
