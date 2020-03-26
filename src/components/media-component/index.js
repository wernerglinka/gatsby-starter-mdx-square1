import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import mdStringToHTML from "../../utilities/md-to-html";

import useSiteImage from "../../hooks/useSiteImage";
import { TextWrapper, ImageWrapper, SectionWrapper } from "./media-component-styles";
import { InternalCTA, ExternalCTA } from "../common-styles";

/** ***************************************************************************
 *  Media component
 *  - presents a combination of an image and text
 *  - order of representation is determined by the boolean imageLeft
 *  - the text may consist of a title, sub title, body text and a CTA
 *  - the CTA may be internal or external, which is determined by the
 *    boolean isExternal
 *************************************************************************** */
const MediaComponent = ({ info }) => {
  const { title, subtitle, content, linkURL, linkText, image, imageLeft, isExternal, targetID } = info;
  const thisImage = useSiteImage(image);

  return (
    <section id={targetID}>
      <SectionWrapper className={imageLeft ? "image-left" : null}>
        <TextWrapper>
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
          {content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />}
          {linkURL && !isExternal && <InternalCTA to={linkURL}>{linkText}</InternalCTA>}
          {linkURL && isExternal && <ExternalCTA to={linkURL}>{linkText}</ExternalCTA>}
        </TextWrapper>
        <ImageWrapper>
          <Img fluid={thisImage} />
        </ImageWrapper>
      </SectionWrapper>
    </section>
  );
};

MediaComponent.propTypes = {
  info: PropTypes.shape(),
};

MediaComponent.defaultProps = {
  info: {},
};

export default MediaComponent;
