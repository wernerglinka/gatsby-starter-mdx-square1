/* global document */

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import { TopMsg } from "./top-message-styles";
import { Container } from "../common-styles";
import mdStringToHTML from "../../utilities/md-to-html";

/** ***************************************************************************
 *  Top message component
 *  renders a narrow banner on the very top of the page
 *  A top message will inserted if "topMessage: | some text" is present in 
 *  the page frontmatter
  
 *************************************************************************** */
const topMessage = ({ message, hideTopbar }) => {
  const [inTransition, startTransition] = useState(false);
  const topbarRef = useRef();

  const handleClick = () => {
    startTransition(true);
  };

  useEffect(() => {
    // this should be done with an event listener to "transitionend" but
    // the event listener doesn't fire.
    if (inTransition) {
      // hide topbar will remove the topbar from the DOM at the layout level
      const timer = setTimeout(() => {
        hideTopbar(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inTransition]);

  return (
    <TopMsg inTransition={inTransition} ref={topbarRef}>
      <Container>
        <FiX onClick={handleClick} />
        <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(message) }} />
      </Container>
    </TopMsg>
  );
};

topMessage.propTypes = {
  message: PropTypes.string,
  hideTopbar: PropTypes.func.isRequired,
};

topMessage.defaultProps = {
  message: "",
};

export default topMessage;
