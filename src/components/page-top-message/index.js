import React from "react";
import PropTypes from "prop-types";
import { TopMsg } from "./top-message-styles";
import mdStringToHTML from "../../utilities/md-to-html";

/** ***************************************************************************
 *  Top message component
 *  renders a narrow banner on the very top of the page
 *  A top message will inserted if "topMessage: | some text" is present in 
 *  the page frontmatter
  
 *************************************************************************** */
const topMessage = ({ message }) => <TopMsg dangerouslySetInnerHTML={{ __html: mdStringToHTML(message) }} />;

topMessage.propTypes = {
  message: PropTypes.string,
};

topMessage.defaultProps = {
  message: "",
};

export default topMessage;
