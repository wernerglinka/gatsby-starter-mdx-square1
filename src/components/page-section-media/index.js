import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";
import titleCase from "ap-style-title-case";
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
  const {
    title, // the optional title of the text section
    subtitle, // the optional subtitle of the text section
    content, // the optional content of the text section
    linkURL, // the CTA link of the text section
    linkText, // the CTA text of the text section
    image, // the mandatory image... after all this is a media component
    imageLeft, // determines whether image is positioned left or right of the text
    isExternal, // determines if the CTA links to an internal/external target
    targetID, // add an ID attribute to the section so links can target it
  } = info;

  const thisImage = useSiteImage(image);

  return (
    <section id={targetID}>
      <SectionWrapper className={imageLeft ? "image-left" : null}>
        <TextWrapper>
          {title && <h2>{titleCase(title)}</h2>}
          {subtitle && <p>{subtitle}</p>}
          {content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />}
          {linkURL && !isExternal && <InternalCTA to={linkURL}>{linkText}</InternalCTA>}
          {linkURL && isExternal && (
            <ExternalCTA href={linkURL} target="_blank" rel="noopener noreferrer">
              {linkText}
            </ExternalCTA>
          )}
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
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    linkURL: PropTypes.string,
    linkText: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageLeft: PropTypes.bool,
    isExternal: PropTypes.bool,
    targetID: PropTypes.string,
  }),
};

MediaComponent.defaultProps = {
  info: {
    title: null,
    subtitle: null,
    content: null,
    linkURL: null,
    linkText: null,
    imageLeft: false,
    isExternal: false,
    targetID: null,
  },
};

export default MediaComponent;
