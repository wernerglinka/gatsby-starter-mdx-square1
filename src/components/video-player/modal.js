/* global window, document */
import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import { FiX } from "react-icons/fi";

import { Overlay, ModalContent, VideoWrapper } from "./video-player-styles";

/** ***************************************************************************
 *  Video Player Modal Component
 *************************************************************************** */
const VideoModal = ({ source, setVideoState, videoState }) => {
  function closeModal() {
    setVideoState({ ...videoState, souce: null, showVideo: false });
  }

  function handleOverlayClicked(e) {
    if (e.target.id === "modalOverlay") {
      closeModal();
    }
  }

  return ReactDOM.createPortal(
    <Overlay id="modalOverlay" onClick={handleOverlayClicked}>
      <ModalContent>
        <VideoWrapper>
          <FiX onClick={closeModal} />
          <ReactPlayer className="react-player" url={source} width="100%" height="100%" playing />
        </VideoWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

VideoModal.propTypes = {
  info: PropTypes.shape(),
};

VideoModal.defaultProps = {
  info: {},
};

export default VideoModal;
