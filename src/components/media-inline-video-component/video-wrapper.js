/* global window, document, YT */
import React from "react";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";

import CloudinaryVideo from "./video-source-cloudinary";
import YouTubeVideo from "./video-source-youtube";

import { VideoWrapper } from "./media-video-component-styles";

/** ***************************************************************************
 *  Inline Video component
 *  Selects respective video players
 *************************************************************************** */
const InlineVideo = ({ source, videoID, setVideoState, videoState }) => {
  function closeVideo() {
    setVideoState({
      ...videoState,
      source: null,
      videoID: null,
      showVideo: false,
    });
  }
  return (
    <VideoWrapper>
      <FiX onClick={closeVideo} />
      {source === "cloudinary" && (
        <CloudinaryVideo videoID={videoID} setVideoState={setVideoState} videoState={videoState} />
      )}
      {source === "youtube" && <YouTubeVideo videoID={videoID} setVideoState={setVideoState} videoState={videoState} />}
    </VideoWrapper>
  );
};

InlineVideo.propTypes = {
  videoID: PropTypes.string,
  source: PropTypes.string,
  setVideoState: PropTypes.func.isRequired,
  videoState: PropTypes.object.isRequired,
};

InlineVideo.defaultProps = {
  videoID: null,
  source: null,
};

export default InlineVideo;
