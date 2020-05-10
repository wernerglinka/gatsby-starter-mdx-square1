import React from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import {} from "./section-intro-styles";

/** ***************************************************************************
 *  Section Intro Component
 *  A common set of optional fields for a page section. All are optional
 *************************************************************************** */
const SectionIntro = ({ info }) => {
  const { title, subtitle, content } = info;
  return (
    <>
      {title && <h2>{titleCase(title)}</h2>}
      {subtitle && <p>{subtitle}</p>}
      {content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />}
    </>
  );
};

SectionIntro.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    content: PropTypes.string,
  }),
};

SectionIntro.defaultProps = {
  info: {
    title: null,
    subtitle: null,
    content: null,
  },
};

export default SectionIntro;
