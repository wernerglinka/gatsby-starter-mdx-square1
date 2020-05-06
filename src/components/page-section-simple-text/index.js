import PropTypes from "prop-types";
import React from "react";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";

import { Wrapper } from "./simple-text-styles";

const SimpleText = ({ info }) => (
  <Wrapper>
    {info.title && <h2>{titleCase(info.title)}</h2>}
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
