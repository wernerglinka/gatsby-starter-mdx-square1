import React from "react";
import PropTypes from "prop-types";
import mdStringToHTML from "../../utilities/md-to-html";
import CTA from "../cta";
import Point from "./point";
import { MainPointsSection, PointWrapper } from "./main-points-styles";

/** ***************************************************************************
 *  Main Points Component
 *************************************************************************** */
const MainPoints = ({ info }) => {
  return (
    <MainPointsSection>
      {info.title && <h2>{info.title}</h2>}
      {info.content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />}
      <PointWrapper>
        {info.items.map(point => {
          return <Point key={point.title} info={point} />;
        })}
      </PointWrapper>
      {info.cta && <CTA cta={info.cta} />}
    </MainPointsSection>
  );
};

MainPoints.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cta: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default MainPoints;
