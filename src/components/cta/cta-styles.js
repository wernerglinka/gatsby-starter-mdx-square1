import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

// styles for external and internal inline links are identials but
// external is applied to <a> and internal to <Link> element
const linkStyles = css`
  font-size: 0.875rem;

  &:hover {
    text-decoration: none;

    &:after {
      content: ">>>";
      color: inherit;
      padding-left: 10px;
      opacity: 0;
      animation: in 1s ease-out forwards;
    }
  }
  @keyframes in {
    0% {
      letter-spacing: -10px;
      opacity: 0;
    }
    50% {
      letter-spacing: 8px;
      opacity: 1;
    }
    100% {
      letter-spacing: 4px;
      opacity: 1;
    }
  }
`;

export const InternalCTALink = styled(Link)`
  ${linkStyles}
`;

export const ExternalCTALink = styled.a`
  ${linkStyles}
`;

// styles for external and internal button links are identials but
// external is applied to <a> and internal to <Link> element
const buttonStyles = css`
  display: inline-block;
  padding: 10px 30px;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #666;
    color: #fff;
    text-decoration: none;
  }
`;

export const InternalCTAButton = styled(Link)`
  ${buttonStyles}
  background-color: ${props =>
    props.btnStyle === "primary" ? "#000" : props.btnStyle === "secondary" ? "#666" : "#ccc"};
`;

export const ExternalCTAButton = styled.a`
  ${buttonStyles}
  background-color: ${props =>
    props.btnStyle === "primary" ? "#000" : props.btnStyle === "secondary" ? "#666" : "#ccc"};
`;
