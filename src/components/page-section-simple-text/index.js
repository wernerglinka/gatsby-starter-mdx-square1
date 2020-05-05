import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../../utilities/md-to-html";

import { Wrapper } from "./simple-text-styles";

const SimpleText = ({ info }) => (
  <Wrapper>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </Wrapper>
);

SimpleText.propTypes = {
  info: PropTypes.shape(),
};

SimpleText.defaultProps = {
  info: {},
};

export default SimpleText;
