import PropTypes from "prop-types";
import React, { useState } from "react";
import Img from "gatsby-image";
import ReactPlayer from "react-player";
import { FiX } from "react-icons/fi";
import titleCase from "ap-style-title-case";
import Fade from "../fade";

import useVideoThumbnail from "../../hooks/useVideoThumbnail";

import { SectionWrapper, ImageWrapper, Inner, PlayButton, VideoWrapper } from "./video-player-styles";

/** ***************************************************************************
 *  Video Player Component
 *************************************************************************** */
const VideoPlayerComponent = ({ info }) => {
  const {
    thumbnailImage, // the mandatory image...
    videoSource, // mandatory
  } = info;

  const videoThumbnail = useVideoThumbnail(thumbnailImage);

  console.log(thumbnailImage);

  const [videoState, setVideoState] = useState({
    source: null,
    videoID: null,
    showVideo: false,
  });

  function showVideo(source) {
    setVideoState({ ...videoState, source, showVideo: true });
  }
  function hideVideo() {
    setVideoState({
      ...videoState,
      source: null,
      showVideo: false,
    });
  }

  return (
    <section>
      <SectionWrapper>
        <h1>{titleCase(info.title)}</h1>
        <ImageWrapper>
          <Inner>
            <button type="button" onClick={() => showVideo(videoSource)}>
              <Img fluid={videoThumbnail} />
              <PlayButton />
            </button>
            <Fade show={videoState.showVideo}>
              <VideoWrapper>
                <FiX onClick={hideVideo} />
                <ReactPlayer className="react-player" url={videoSource} width="100%" height="100%" playing />
              </VideoWrapper>
            </Fade>
          </Inner>
        </ImageWrapper>
      </SectionWrapper>
    </section>
  );
};

VideoPlayerComponent.propTypes = {
  info: PropTypes.shape(),
};

VideoPlayerComponent.defaultProps = {
  info: {},
};

export default VideoPlayerComponent;
