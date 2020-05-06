import React from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import CTA from "../cta";
import Point from "./point";
import { MainPointsSection, PointsWrapper } from "./main-points-styles";

/** ***************************************************************************
 *  Main Points Component
 *************************************************************************** */
const MainPoints = ({ info }) => {
  return (
    <MainPointsSection>
      {info.title && <h2>{titleCase(info.title)}</h2>}
      {info.content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />}
      <PointsWrapper>
        {info.items.map(point => {
          return <Point key={point.title} info={point} />;
        })}
      </PointsWrapper>
      {info.cta && <CTA cta={info.cta} />}
    </MainPointsSection>
  );
};

MainPoints.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cta: PropTypes.object.isRequired,
    isButton: PropTypes.bool,
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default MainPoints;
