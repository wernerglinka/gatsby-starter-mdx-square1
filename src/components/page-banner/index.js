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
  const [backgroundIsFixed, setBackgroundIsFixed] = useState();

  // Mobile apple devices do not support backgropund-position: fixed. Since Safari doesn't
  // indicate device type all apple devices are treated equal
  const setApple = () => setBackgroundIsFixed(false);
  const unsetApple = () => setBackgroundIsFixed(true);

  useEffect(() => {
    if (navigator.vendor.includes("Apple")) {
      setApple();
    } else {
      unsetApple();
    }
  }, []);

  return (
    <Banner fluid={bgImage} className={backgroundIsFixed ? null : "isScroll"}>
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
