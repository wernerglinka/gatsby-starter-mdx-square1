/* global window, document, YT */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const YouTubeVideo = ({ videoID, setVideoState, videoState }) => {
  let youTubeTarget = useRef();
  let player;

  function hideVideo() {
    setVideoState({
      ...videoState,
      source: null,
      videoID: null,
      showVideo: false,
    });
  }

  const onPlayerStateChange = function(event) {
    switch (event.data) {
      case YT.PlayerState.PAUSED:
        break;

      case YT.PlayerState.PLAYING:
        break;

      case YT.PlayerState.ENDED:
        hideVideo();
        break;

      case YT.PlayerState.CUED:
        break;

      default:
    }
  };

  const playVideo = () => player.playVideo();

  // reference https://developers.google.com/youtube/player_parameters?playerVersion=HTML5
  const playerVars = {
    autoplay: 0,
    // start: startTime || null, // if no start or end time is specified go trom 0 to end
    // end: endTime || null, // start/stop via js commands
    controls: 1, // show video controls
    enablejsapi: 1, // enable the js api so we can control then player with js
    wmode: "opaque", // allow other elements to cover video, e.g. dropdowns or pop-ups
    origin: window.location.origin, // prevent "Failed to execute 'postMessage' on 'DOMWindow'" error
    rel: 0, // disable other video suggestions after video end
  };

  function getPlayer(YT) {
    player = new YT.Player(youTubeTarget, {
      videoId: videoID,
      playerVars,
      events: {
        onReady: playVideo,
        onStateChange: onPlayerStateChange,
      },
    });
    return player;
  }

  useEffect(() => {
    // if the YouTube iFrame API isn't loaded yet, we do it here
    if (!window.YT) {
      // load the youTube video JS api
      // https://developers.google.com/youtube/iframe_api_reference
      // This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // use a promise to manage the async onYouTubeIframeAPIReady function
      new Promise(resolve => {
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      }).then(YT => getPlayer(YT));
    } else {
      // the YT object already exists so we just get a player
      getPlayer(YT);
    }
  }, []); // this only runs once as the empty array never changes

  // eslint-disable-next-line
  return <div ref={e => { youTubeTarget = e }} />
};

YouTubeVideo.propTypes = {
  videoID: PropTypes.string,
  setVideoState: PropTypes.func.isRequired,
  videoState: PropTypes.object.isRequired,
};

YouTubeVideo.defaultProps = {
  videoID: null,
};

export default YouTubeVideo;
