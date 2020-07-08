/* global document */

import React from "react";
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
  const handleClick = () => {
    hideTopbar(false);
  };

  return (
    <TopMsg>
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
