import React from "react";
import PropTypes from "prop-types";
import { InternalCTALink, ExternalCTALink, ExternalCTAButton, InternalCTAButton } from "./cta-styles";

/** ***************************************************************************
 *  Call-to-Action Component
 *  A CTA may be linked to internal or external pages
 *************************************************************************** */
const CTA = ({ cta }) => {
  const { URL, text, isExternal, isButton, buttonStyle } = cta;

  let thisCTA;
  /* eslint-disable */
  isButton &&
    (isExternal
      ? (thisCTA =  
          <ExternalCTAButton href={URL} target="_blank" rel="noopener noreferrer" btnStyle={buttonStyle}> 
            {text}
          </ExternalCTAButton>
        )
      : (thisCTA = <InternalCTAButton to={URL} btnStyle={buttonStyle}>{text}</InternalCTAButton>));

  !isButton &&
    (isExternal
      ? (thisCTA = 
          <ExternalCTALink href={URL} target="_blank" rel="noopener noreferrer">
            {text}
          </ExternalCTALink>
        )
      : (thisCTA = <InternalCTALink to={URL}>{text}</InternalCTALink>));
  /* eslint-enable */
  return thisCTA;
};

CTA.propTypes = {
  cta: PropTypes.shape({
    URL: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isExternal: PropTypes.bool.isRequired,
    isButton: PropTypes.bool,
    buttonStyle: PropTypes.string,
  }).isRequired,
};

export default CTA;
