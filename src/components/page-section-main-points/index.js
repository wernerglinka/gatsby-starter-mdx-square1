import React from "react";
import PropTypes from "prop-types";
import CTA from "../cta";
import Point from "./point";
import SectionIntro from "../section-intro";
import { MainPointsSection, PointsWrapper } from "./main-points-styles";

/** ***************************************************************************
 *  Main Points Component
 *************************************************************************** */
const MainPoints = ({ info }) => {
  return (
    <MainPointsSection>
      <SectionIntro info={info} />
      <PointsWrapper className={info.wrapperClasses}>
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
    wrapperClasses: PropTypes.string,
    cta: PropTypes.object,
    isButton: PropTypes.bool,
    items: PropTypes.array.isRequired,
  }),
};

MainPoints.defaultProps = {
  info: {
    wrapperClasses: null,
    cta: null,
    isButton: false,
  },
};

export default MainPoints;
