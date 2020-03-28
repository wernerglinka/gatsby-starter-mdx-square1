import PropTypes from "prop-types";
import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import Img from "gatsby-image";
import mdStringToHTML from "../../utilities/md-to-html";
import Fade from "../fade";

import VideoWrapper from "./video-wrapper";
import useVideoThumbnail from "../../hooks/useVideoThumbnail";
import { TextWrapper, ImageWrapper, SectionWrapper, PlayButton, Inner } from "./media-video-component-styles";
import { InternalCTA, ExternalCTA } from "../common-styles";

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
    linkURL, // the CTA link of the text section
    linkText, // the CTA text of the text section
    thumbnailImage, // the mandatory image...
    videoSource, // mandatory
    videoID, // mandatory
    imageLeft, // determines whether image is positioned left or right of the text
    isExternal, // determines if the CTA links to an internal/external target
    targetID, // add an ID attribute to the section so links can target it
  } = info;

  const videoThumbnail = useVideoThumbnail(thumbnailImage);

  const [videoState, setVideoState] = useState({
    source: null,
    videoID: null,
    showVideo: false,
  });

  function showVideo(source, videoID) {
    setVideoState({ ...videoState, source, videoID, showVideo: true });
  }

  return (
    <section id={targetID}>
      <SectionWrapper className={imageLeft ? "image-left" : null}>
        <TextWrapper>
          {title && <h2>{title}</h2>}
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
          <Inner>
            <button type="button" onClick={() => showVideo(videoSource, videoID)}>
              <Img fluid={videoThumbnail} />
              <PlayButton />
            </button>
            {videoState.showVideo && (
              <VideoWrapper
                source={videoState.source}
                videoID={videoState.videoID}
                setVideoState={setVideoState}
                videoState={videoState}
              />
            )}
          </Inner>
        </ImageWrapper>
      </SectionWrapper>
    </section>
  );
};

MediaInlineVideoComponent.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
    linkURL: PropTypes.string,
    linkText: PropTypes.string,
    thumbnailImage: PropTypes.string.isRequired,
    videoSource: PropTypes.string,
    videoID: PropTypes.string,
    imageLeft: PropTypes.bool,
    isExternal: PropTypes.bool,
    targetID: PropTypes.string,
  }),
};

MediaInlineVideoComponent.defaultProps = {
  info: {
    title: null,
    subtitle: null,
    content: null,
    linkURL: null,
    linkText: null,
    videoSource: null,
    videoID: null,
    imageLeft: false,
    isExternal: false,
    targetID: null,
  },
};

export default MediaInlineVideoComponent;
