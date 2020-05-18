/* global document, window */

/**
 * Gatsby's Browser APIs
 */

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

export const onRouteUpdate = ({ location, prevLocation }) => {
  // attach scroll library to any anchor link on the page
  // source: https://github.com/cferdinandi/smooth-scroll
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 500,
    offset: 100,
    easing: "easeInOutCubic",
  });

  // check for links that point to internal pages and convert them to relative
  // links. Otherwise they will force a page reload.
  // Then check all external links if they have a target and rel attribute set so
  // they open a new window
  const allExternalLinks = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');
  const thisSiteOrigin = location.origin;
  const originLength = thisSiteOrigin.length;

  allExternalLinks.forEach(link => {
    const thisLink = link;

    if (thisLink.href.startsWith(thisSiteOrigin)) {
      const relativeURL = thisLink.href.slice(originLength);
      thisLink.href = relativeURL;
    } else if (!thisLink.hasAttribute("target")) {
      thisLink.setAttribute("target", "_blank");

      if (!thisLink.hasAttribute("rel")) {
        thisLink.setAttribute("rel", "noopener noreferrer");
      }
    }
  });
};

// This code is used by page transitions so the user doesn't see the scroll back to the
// top before the page transitions
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  const transitionDelay = 500;
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), transitionDelay);
  }
  return false;
};

// apply syntaxt highlighting when a <pre> element is seen
// sources:
// - https://github.com/FormidableLabs/prism-react-renderer
// - https://malikgabroun.com/syntax-highlighting-in-gatsby-mdx
// themes are located in "prism-react-renderer/themes"
const components = {
  pre: props => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""}
        theme={github}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};

// Fixing site being non-responsive until page is hard reloaded
// source:  https://github.com/gatsbyjs/gatsby/issues/9087
export const onServiceWorkerUpdateReady = () => window.location.reload(true);
