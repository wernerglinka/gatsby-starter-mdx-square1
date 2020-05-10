import PropTypes from "prop-types";
import React from "react";
import CTA from "../cta";
import SectionIntro from "../section-intro";

import { Wrapper } from "./simple-text-styles";

const SimpleText = ({ info }) => {
  const { cta } = info;
  return (
    <Wrapper>
      <SectionIntro info={info} />
      {cta.URL && <CTA cta={cta} />}
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
