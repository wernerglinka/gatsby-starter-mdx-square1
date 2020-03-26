import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import useBgImage from "../../hooks/useBgImage";

import { Container } from "../common-styles";

const Banner = styled(BackgroundImage)`
  height: 0;
  padding-bottom: 25%;
  margin: ${props => props.theme.headerHeight} -${props => props.theme.bodySidePadding} 0;
  background-attachment: fixed;
  background-position: center top -80px;
`;

const BannerContent = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vw;

  h1 {
    margin: 0;
  }
`;

/** ***************************************************************************
 *  Page Banner Component
 *************************************************************************** */

const PageBanner = ({ properties, title }) => {
  const bgImage = useBgImage(properties.bgImage);

  return (
    <Banner fluid={bgImage}>
      <BannerContent>
        <h1>{title}</h1>
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
