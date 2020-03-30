import PropTypes from "prop-types";
import React from "react";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import VideoPlayer from "../video-player";

import { SectionWrapper } from "./video-player-styles";

/** ***************************************************************************
 *  Video Player Component
 *************************************************************************** */
const VideoPlayerComponent = ({ info }) => {
  const { title, subtitle, content } = info;

  return (
    <section>
      <SectionWrapper>
        {title && <h1>{titleCase(title)}</h1>}
        {subtitle && <p>{subtitle}</p>}
        {content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />}

        <VideoPlayer info={info} />
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
