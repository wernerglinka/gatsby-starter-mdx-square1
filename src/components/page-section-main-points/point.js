import React from "react";
import PropTypes from "prop-types";
import mdStringToHTML from "../../utilities/md-to-html";
import CTA from "../cta";
import useSVG from "../../hooks/useSVG";

/** ***************************************************************************
 *  Single Point Component
 *************************************************************************** */
const Point = ({ info }) => (
  <li>
    {info.icon && <img src={useSVG(info.icon)} alt="" />}
    {info.title && <h2>{info.title}</h2>}
    {info.content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />}
    {info.cta && <CTA cta={info.cta} />}
  </li>
);

Point.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cta: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Point;
