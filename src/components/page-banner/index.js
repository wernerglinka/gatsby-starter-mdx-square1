/* global navigator */
import React from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import useCloudinaryImage from "../../hooks/useCloudinaryImage";

import { Banner, BannerContent } from "./page-banner-styles";

/** ***************************************************************************
 *  Page Banner Component
 *************************************************************************** */

const PageBanner = ({ properties, title }) => {
  const clImage = useCloudinaryImage(properties.bgImage);

  return (
    <Banner style={{ backgroundImage: `url(${clImage})` }}>
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
