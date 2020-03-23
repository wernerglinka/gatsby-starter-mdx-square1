import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";

const Component2 = ({ info }) => (
  <div>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </div>
);

Component2.propTypes = {
  info: PropTypes.shape(),
};

Component2.defaultProps = {
  info: {},
};

export default Component2;
