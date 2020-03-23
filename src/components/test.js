import PropTypes from "prop-types";
import React from "react";

const Test = ({ text }) => <div>{text}</div>;

Test.propTypes = {
  text: PropTypes.string,
};

Test.defaultProps = {
  text: ``,
};

export default Test;
