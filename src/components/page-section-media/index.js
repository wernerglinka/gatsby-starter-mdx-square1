import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";
import CTA from "../cta";
import SectionIntro from "../section-intro";
import useSiteImage from "../../hooks/useSiteImage";

import useCloudinaryImage from "../../hooks/useCloudinaryImage";

import { TextWrapper, ImageWrapper, SectionWrapper } from "./media-component-styles";

/** ***************************************************************************
 *  Media component
 *  - presents a combination of image and text
 *  - order of representation is determined by the boolean imageLeft
 *  - the text may consist of a title, sub title, body text and a CTA
 *  - the CTA may be internal or external, which is determined by the
 *    boolean isExternal
 *  - if targetID is present an ID is added to the section to be used for
 *    in-page navigation
 *************************************************************************** */
const MediaComponent = ({ info }) => {
  const {
    image, // the mandatory image... after all this is a media component
    imageLeft, // determines whether image is positioned left or right of the text
    targetID, // add an ID attribute to the section so links can target it
    cta, // the inevitable call-to-action
  } = info;

  const thisImage = useSiteImage(image);

  return (
    <section id={targetID}>
      <SectionWrapper imageLeft={imageLeft}>
        <TextWrapper>
          <SectionIntro info={info} />
          {cta.URL && <CTA cta={cta} />}
        </TextWrapper>
        <ImageWrapper>
          <Img fluid={thisImage} />
        </ImageWrapper>
      </SectionWrapper>
    </section>
  );
};

MediaComponent.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageLeft: PropTypes.bool,
    targetID: PropTypes.string,
    cta: PropTypes.object,
  }),
};

MediaComponent.defaultProps = {
  info: {
    imageLeft: false,
    targetID: null,
    cta: null,
  },
};

export default MediaComponent;
