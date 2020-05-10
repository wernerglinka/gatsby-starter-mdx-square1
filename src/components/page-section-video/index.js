import PropTypes from "prop-types";
import React from "react";
import VideoPlayer from "../video-player";
import CTA from "../cta";
import SectionIntro from "../section-intro";
import { SectionWrapper } from "./video-player-styles";

/** ***************************************************************************
 *  Video Player Component
 *************************************************************************** */
const VideoPlayerComponent = ({ info }) => {
  const { cta } = info;
  return (
    <section>
      <SectionWrapper>
        <SectionIntro info={info} />

        <VideoPlayer info={info} />
        {cta.URL && <CTA cta={cta} />}
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
