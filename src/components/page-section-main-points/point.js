import React, { Fragment } from "react";
import PropTypes from "prop-types";
import mdStringToHTML from "../../utilities/md-to-html";
import CTA from "../cta";
import useSVG from "../../hooks/useSVG";
import { PointWrapper } from "./main-points-styles";

/** ***************************************************************************
 *  Single Point Component
 *************************************************************************** */
const Point = ({ info, wrapperClasses }) => {
  console.log(info);
  return (
    <PointWrapper className={wrapperClasses}>
      <div>
        {info.icon && <img src={useSVG(info.icon)} alt="" />}
        {info.title && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.title) }} />}
        {info.content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />}
        {info.cta && <CTA cta={info.cta} />}
      </div>
    </PointWrapper>
  );
};

Point.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cta: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  wrapperClasses: PropTypes.string,
};

Point.defaultProps = {
  wrapperClasses: null,
};

export default Point;
