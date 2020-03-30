import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";

const Section1 = ({ info }) => (
  <div>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </div>
);

Section1.propTypes = {
  info: PropTypes.shape(),
};

Section1.defaultProps = {
  info: {},
};

export default Section1;
