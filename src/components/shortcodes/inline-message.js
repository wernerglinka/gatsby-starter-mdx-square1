import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const Message = styled.aside`
  padding: 20px 0;
  text-align: center;
  background-color: #f0f0f0;
  margin: 30px 0;
`;

/** ***************************************************************************
 *  Shortcode for an Inline Message
 *************************************************************************** */

const InlineMsg = ({ text }) => {
  return (
    <Message>
      <strong>{text}</strong>
    </Message>
  );
};

InlineMsg.propTypes = {
  text: PropTypes.shape(),
};

InlineMsg.defaultProps = {
  text: "",
};

export default InlineMsg;
