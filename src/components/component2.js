import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "./common-styles";

const Component2 = ({ info }) => (
  <Container>
    <h2>{info.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(info.content) }} />
  </Container>
);

Component2.propTypes = {
  info: PropTypes.shape(),
};

Component2.defaultProps = {
  info: {},
};

export default Component2;
