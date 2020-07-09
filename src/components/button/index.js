import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const ButtonLink = styled(Link)`
  display: block !important;
  line-height: 1 !important;
  padding: 10px 20px !important;
  border: 2px solid #999;
  background-color: #999;
  color: #fff;
  font-weight: 400;
  margin-left: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    background-color: transparent;
    color: #999;
  }
`;

const Button = ({ buttonAttr, to, buttonText }) => {
  return (
    <ButtonLink to={to} buttonAttr={buttonAttr}>
      {buttonText}
    </ButtonLink>
  );
};

Button.propTypes = {
  buttonAttr: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
