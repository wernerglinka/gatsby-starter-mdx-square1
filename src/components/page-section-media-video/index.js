import PropTypes from "prop-types";
import React, { useState } from "react";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";

import VideoPlayer from "../video-player";
import CTA from "../cta";

import { TextWrapper, SectionWrapper } from "./page-section-media-video-styles";

/** ***************************************************************************
 *  Media Video component
 *  This component is very similar to the Media Component. It is a seperate
 *  component to keep complexity down
 *  - presents a combination of a video and text
 *  - order of representation is determined by the boolean imageLeft
 *  - the text may consist of a title, sub title, body text and a CTA
 *  - the CTA may be internal or external, which is determined by the
 *    boolean isExternal
 *************************************************************************** */
const MediaInlineVideoComponent = ({ info }) => {
  const {
    title, // the optional title of the text section
    subtitle, // the optional subtitle of the text section
    content, // the optional content of the text section
    imageLeft, // determines whether image is positioned left or right of the text
    targetID, // add an ID attribute to the section so links can target it
    cta, // the inevitable call-to-action
  } = info;

  return (
    <section id={targetID}>
      <SectionWrapper className={imageLeft ? "image-left" : null}>
        <TextWrapper>
          {title && <h2>{titleCase(title)}</h2>}
          {subtitle && <p>{subtitle}</p>}
          {content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />}
          {cta.URL && <CTA cta={cta} />}
        </TextWrapper>
        <VideoPlayer info={info} />
      </SectionWrapper>
    </section>
  );
};

MediaInlineVideoComponent.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageLeft: PropTypes.bool,
    targetID: PropTypes.string,
    cta: PropTypes.object,
  }),
};

MediaInlineVideoComponent.defaultProps = {
  info: {
    title: null,
    subtitle: null,
    content: null,
    imageLeft: false,
    targetID: null,
    cta: null,
  },
};

export default MediaInlineVideoComponent;
