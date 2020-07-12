/* global navigator */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import clImagePath from "../../utilities/cl-image-path";

import TopbarContext from "../../contexts/topbar-context";

import { Banner, BackgroundImage, BannerContent } from "./page-banner-styles";

/** ***************************************************************************
 *  Page Banner Component
 *************************************************************************** */
const PageBanner = ({ properties, title }) => {
  const { bgImage, imageMaxWidth, sizes, alt } = properties;
  const hasTopbar = useContext(TopbarContext);

  return (
    <Banner hasTopbar={hasTopbar}>
      <BackgroundImage style={{ backgroundImage: `url('${clImagePath(bgImage, imageMaxWidth)}')` }}>
        <BannerContent>
          <h1>{titleCase(title)}</h1>
        </BannerContent>
      </BackgroundImage>
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
