import PropTypes from "prop-types";
import React from "react";
import CTA from "../cta";
import SectionIntro from "../section-intro";
import { Wrapper } from "./cta-banner-styles";

const CTABanner = ({ info }) => {
  const { bgIsDark, cta } = info;

  return (
    <Wrapper bgIsDark={bgIsDark}>
      <SectionIntro info={info} />
      {cta.URL && <CTA cta={cta} />}
    </Wrapper>
  );
};

CTABanner.propTypes = {
  info: PropTypes.shape(),
};

CTABanner.defaultProps = {
  info: {},
};

export default CTABanner;
