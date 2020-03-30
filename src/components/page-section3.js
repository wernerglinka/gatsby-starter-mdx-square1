import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";

const Section3 = ({ info }) => (
  <div>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </div>
);

Section3.propTypes = {
  info: PropTypes.shape(),
};

Section3.defaultProps = {
  info: {},
};

export default Section3;
