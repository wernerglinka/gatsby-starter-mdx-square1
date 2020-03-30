import React from "react";
import PropTypes from "prop-types";

import { BackgroundColorAndContainer, WithContainer, BackgroundColorAndFullWidth, FullWidth } from "./wrapper-styles";

/** ***************************************************************************
 *  Section Wrapper
 *  With hasBackground and inContainer each section may specify its wrapper:
 *  - with background color and inside container
 *  - with background color and stretching full page width
 *  - no background color but inside container
 *  - no background color and no container
 *************************************************************************** */

const SectionWrapper = ({ children }) => {
  const { info } = children.props;
  const { hasBackground, inContainer } = info;

  if (hasBackground && inContainer) {
    return <BackgroundColorAndContainer>{children}</BackgroundColorAndContainer>;
  }

  if (hasBackground && !inContainer) {
    return <BackgroundColorAndFullWidth>{children}</BackgroundColorAndFullWidth>;
  }

  if (!hasBackground && inContainer) {
    return <WithContainer>{children}</WithContainer>;
  }

  return <FullWidth>{children}</FullWidth>;
};

export default SectionWrapper;

SectionWrapper.propTypes = {
  children: PropTypes.shape().isRequired,
};
