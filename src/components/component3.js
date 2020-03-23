import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";

const Component3 = ({ info }) => (
  <div>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </div>
);

Component3.propTypes = {
  info: PropTypes.shape(),
};

Component3.defaultProps = {
  info: {},
};

export default Component3;
