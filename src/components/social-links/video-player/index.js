import PropTypes from "prop-types";
import React, { useState } from "react";
import Img from "gatsby-image";
import ReactPlayer from "react-player";
import { FiX } from "react-icons/fi";
import Fade from "../fade";
import Modal from "./modal";

import useVideoThumbnail from "../../hooks/useVideoThumbnail";

import { ImageWrapper, Inner, PlayButton, VideoWrapper } from "./video-player-styles";

/** ***************************************************************************
 *  Video Player Component
 *  Video player to play videos either inline or in a modal depending on
 *  boolean isModal.
 *************************************************************************** */
const VideoPlayer = ({ info }) => {
  const { thumbnailImage, videoSource, isModal } = info;

  const videoThumbnail = useVideoThumbnail(thumbnailImage);

  const [videoState, setVideoState] = useState({
    source: null,
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
    <ImageWrapper>
      <Inner>
        {/* video thumbnail */}
        <button type="button" onClick={() => showVideo(videoSource)}>
          <Img fluid={videoThumbnail} />
          <PlayButton />
        </button>

        {/* video either inline or in a modal */}
        {isModal ? (
          videoState.showVideo && <Modal source={videoSource} setVideoState={setVideoState} videoState={videoState} />
        ) : (
          <Fade show={videoState.showVideo}>
            <VideoWrapper>
              <FiX onClick={hideVideo} />
              <ReactPlayer className="react-player" url={videoSource} width="100%" height="100%" playing />
            </VideoWrapper>
          </Fade>
        )}
      </Inner>
    </ImageWrapper>
  );
};

VideoPlayer.propTypes = {
  info: PropTypes.shape(),
};

VideoPlayer.defaultProps = {
  info: {},
};

export default VideoPlayer;
