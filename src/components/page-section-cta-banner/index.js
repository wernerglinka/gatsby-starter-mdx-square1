import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";
import { Container } from "../common-styles";

const LocalThemeWrapper = styled.section`
  h2 {
    text-align: center;
    color: ${props => (props.bgIsDark ? "#ffffff" : props.theme.headerDefaultColor)};
  }
  p {
    text-align: center;
    color: ${props => (props.bgIsDark ? "#ffffff" : props.theme.textColor)};
  }
  a {
    display: inline-block;
    padding: 10px 30px;
    border: 1px solid ${props => (props.bgIsDark ? "#ffffff" : props.theme.textColor)};
    color: ${props => (props.bgIsDark ? "#ffffff" : props.theme.textColor)};
    text-transform: uppercase;
    font-size: 0.825rem;
  }
`;

const CTABanner = ({ info }) => {
  const bgIsDark = info.bgIsDark;

  return (
    <LocalThemeWrapper bgIsDark={bgIsDark}>
      {info.title && <h2>{titleCase(info.title)}</h2>}
      <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
    </LocalThemeWrapper>
  );
};

CTABanner.propTypes = {
  info: PropTypes.shape(),
};

CTABanner.defaultProps = {
  info: {},
};

export default CTABanner;
