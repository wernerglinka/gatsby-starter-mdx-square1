/* global navigator */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import ClImage from "../cl-image";

import TopbarContext from "../../contexts/topbar-context";

import { Banner, BannerContent } from "./page-banner-styles";

/** ***************************************************************************
 *  Page Banner Component
 *************************************************************************** */
const PageBanner = ({ properties, title }) => {
  const { bgImage, imageMaxWidth, sizes, alt } = properties;
  const hasTopbar = useContext(TopbarContext);

  return (
    <Banner hasTopbar={hasTopbar}>
      <ClImage imageName={bgImage} maxWidth={imageMaxWidth} sizes={sizes} alt={alt} />
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
