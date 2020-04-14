/* global document, window */

/**
 * Gatsby's Browser APIs
 */

export const onRouteUpdate = ({ location, prevLocation }) => {
  // attach scroll library to any anchor link on the page
  // source: https://github.com/cferdinandi/smooth-scroll
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 500,
    offset: 100,
    easing: "easeInOutCubic",
  });

  // check for links that point to perimeterx.com and convert them to relative
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

const transitionDelay = 500;

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(() => window.scrollTo(...getSavedScrollPosition(savedPosition || [0, 0])), transitionDelay);
  }
  return false;
};
