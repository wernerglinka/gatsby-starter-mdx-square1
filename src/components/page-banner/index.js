/* global navigator */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import useBgImage from "../../hooks/useBgImage";

import { Banner, BannerContent } from "./page-banner-styles";

/** ***************************************************************************
 *  Page Banner Component
 *************************************************************************** */

const PageBanner = ({ properties, title }) => {
  const bgImage = useBgImage(properties.bgImage);

  return (
    <Banner fluid={bgImage}>
      <BannerContent>
        <h1>{titleCase(title)}</h1>
      </BannerContent>
    </Banner>
  );
};

PageBanner.propTypes = {
  properties: PropTypes.shape().isRequired,
  title: PropTypes.string,
};

PageBanner.defaultProps = {
  title: "",
};

export default PageBanner;
