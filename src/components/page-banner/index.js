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
  const [backgroundIsFixed, setBackgroundIsFixed] = useState(true);

  useEffect(() => {
    const iDevices = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];

    if (navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()) {
          setBackgroundIsFixed(false);
        }
      }
    }
  }, []);

  return (
    <Banner fluid={bgImage} bgIsFixed={backgroundIsFixed}>
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
