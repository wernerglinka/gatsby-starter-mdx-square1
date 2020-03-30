/* global document, window */

/**
 * Gatsby's Browser APIs
 */

// a simple page fade in/out transition
// here we just apply lifecycle classes on an element with class "hasTransition"
// the fade in/out is done via CSS in src/components/layout.scss

// fade out the previous page
exports.onPreRouteUpdate = ({ location, prevLocation }) => {
  const transitionElement = document.querySelector(".hasTransition");
  if (transitionElement) {
    transitionElement.classList.add("transitionOut");
    window.setTimeout(() => transitionElement.classList.remove("transitionOut"), 500);
  }
};

// from Modernizer
// source: https://davidwalsh.name/css-animation-callback
function whichAnimationEvent() {
  let animation;
  const element = document.createElement("fakeelement");
  let supportedAnimation;

  const animations = {
    animation: "animationend",
    OAnimation: "oAnimationEnd",
    MozAnimation: "animationend",
    WebkitAnimation: "webkitAnimationEnd",
  };

  // get the animation that the browser supports
  for (animation in animations) {
    if (element.style[animation] !== undefined) {
      supportedAnimation = animations[animation];
    }
  }

  return supportedAnimation;
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  // attach scroll library to any anchor link on the page
  // source: https://github.com/cferdinandi/smooth-scroll
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {
    speed: 500,
    offset: 80,
    easing: "easeInOutCubic",
  });

  // fade in the new page
  const transitionElement = document.querySelector(".hasTransition");
  if (transitionElement) {
    transitionElement.classList.add("transitionIn");

    const animationEvent = whichAnimationEvent();

    transitionElement.addEventListener(animationEvent, function(e) {
      transitionElement.classList.remove("transitionIn");
    });
  }

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
