import PropTypes from "prop-types";
import React from "react";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import SectionIntro from "../section-intro";

import { Wrapper } from "./simple-text-styles";

const SimpleText = ({ info }) => {
  return (
    <Wrapper>
      <SectionIntro info={info} />
    </Wrapper>
  );
};

SimpleText.propTypes = {
  info: PropTypes.shape(),
};

SimpleText.defaultProps = {
  info: {},
};

export default SimpleText;
