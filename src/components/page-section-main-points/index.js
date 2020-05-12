import React from "react";
import PropTypes from "prop-types";
import CTA from "../cta";
import Point from "./point";
import SectionIntro from "../section-intro";
import { MainPointsSection, PointsWrapper } from "./main-points-styles";

/** ***************************************************************************
 *  Main Points Component
 *
 *  the visuals may be completely changed by adding a wrapper class and adding
 *  the respective styles in "./main-points-styles"
 *
 *************************************************************************** */
const MainPoints = ({ info }) => {
  return (
    <MainPointsSection className={info.wrapperClasses}>
      <SectionIntro info={info} />
      <PointsWrapper className={info.wrapperClasses}>
        {info.items.map(point => {
          return <Point key={point.title} info={point} wrapperClasses={info.wrapperClasses} />;
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
