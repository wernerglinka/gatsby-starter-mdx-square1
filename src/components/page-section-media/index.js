import PropTypes from "prop-types";
import React from "react";
import CTA from "../cta";
import SectionIntro from "../section-intro";
import useCloudinaryImage from "../../hooks/useCloudinaryImage";
import useSiteMetadata from "../../hooks/useSiteMetadata";

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

  // const thisImage = useSiteImage(image);
  // get image prefix and transfor string so we can return a fully formed image src
  const { imagePrefix } = useSiteMetadata();
  const imageTransform = `/c_scale,f_auto,q_60,w_420`;

  const thisImage = `${imagePrefix}${imageTransform}${image}`;
  // const thisImage = useCloudinaryImage(image);

  return (
    <section id={targetID}>
      <SectionWrapper imageLeft={imageLeft}>
        <TextWrapper>
          <SectionIntro info={info} />
          {cta.URL && <CTA cta={cta} />}
        </TextWrapper>
        <ImageWrapper>
          <img src={thisImage} alt="" />
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
