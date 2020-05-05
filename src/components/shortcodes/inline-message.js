import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.aside`
  padding: 20px 0;
  text-align: center;
  color: ${props => (props.isDark ? "#fff" : "#000")};
  background-color: ${props => props.backgroundColor};
  margin: 30px 0;
  background-image: ${props => {
    if (props.backgroundPattern === "light") return props.theme.backgroundPattern.light;
    if (props.backgroundPattern === "medium") return props.theme.backgroundPattern.medium;
    if (props.backgroundPattern === "dark") return props.theme.backgroundPattern.dark;
  }};
`;

/** ***************************************************************************
 *  Shortcode for an Inline Message
 *************************************************************************** */

const InlineMsg = ({ text, backgroundPattern, backgroundColor, isDark }) => {
  return (
    <Wrapper backgroundPattern={backgroundPattern} backgroundColor={backgroundColor} isDark={isDark}>
      <strong>{text}</strong>
    </Wrapper>
  );
};

InlineMsg.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundPattern: PropTypes.string,
  backgroundColor: PropTypes.string,
  isDark: PropTypes.bool,
};

InlineMsg.defaultProps = {
  backgroundPattern: null,
  backgroundColor: null,
  isDark: false,
};

export default InlineMsg;
