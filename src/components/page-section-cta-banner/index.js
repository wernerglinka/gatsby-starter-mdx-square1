import PropTypes from "prop-types";
import React from "react";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import CTA from "../cta";
import { Wrapper } from "./cta-banner-styles";

const CTABanner = ({ info }) => {
  const { title, content, bgIsDark, cta } = info;

  console.log(info);

  return (
    <Wrapper bgIsDark={bgIsDark}>
      {info.title && <h2>{titleCase(title)}</h2>}
      <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />
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
