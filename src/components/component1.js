import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";

const Component1 = ({ info }) => (
  <div>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </div>
);

Component1.propTypes = {
  info: PropTypes.shape(),
};

Component1.defaultProps = {
  info: {},
};

export default Component1;
