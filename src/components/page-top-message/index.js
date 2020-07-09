/* global document */

import React from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import titleCase from "ap-style-title-case";
import { TopMsg } from "./top-message-styles";
import { Container } from "../common-styles";
import mdStringToHTML from "../../utilities/md-to-html";

/** ***************************************************************************
 *  Top message component
 *  renders a narrow banner on the very top of the page
 *************************************************************************** */

const topMessage = ({ message, removeTopbar, slug }) => {
  const handleClick = () => {
    removeTopbar(slug);
  };

  return (
    <TopMsg>
      <Container>
        <FiX onClick={handleClick} />
        <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(titleCase(message)) }} />
      </Container>
    </TopMsg>
  );
};

topMessage.propTypes = {
  message: PropTypes.string,
  removeTopbar: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired, // tells us what page to remove the topbar from
};

topMessage.defaultProps = {
  message: "",
};

export default topMessage;
