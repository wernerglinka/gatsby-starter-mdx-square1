import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "./common-styles";

const Section2 = ({ info }) => (
  <Container>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </Container>
);

Section2.propTypes = {
  info: PropTypes.shape(),
};

Section2.defaultProps = {
  info: {},
};

export default Section2;
