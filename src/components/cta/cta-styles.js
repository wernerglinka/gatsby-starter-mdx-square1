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
  @keyframes out {
    0% {
      letter-spacing: 4px;
      opacity: 1;
    }
    100% {
      letter-spacing: -10px;
      opacity: 0;
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
  border-width: 2px;
  border-style: solid;
  transition: all 0.3s ease-in-out;
`;

export const InternalCTAButton = styled(Link)`
  ${buttonStyles}
  background-color: ${props => {
    if (props.btnStyle === "primary") {
      return props.theme.colors.primary;
    }
    if (props.btnStyle === "secondary") {
      return props.theme.colors.secondary;
    }
    if (props.btnStyle === "tertiary") {
      return props.theme.colors.tertiary;
    }
    return props.theme.colors.transparent;
  }};
  border-color: ${props => {
    if (props.btnStyle === "primary") {
      return props.theme.colors.primary;
    }
    if (props.btnStyle === "secondary") {
      return props.theme.colors.secondary;
    }
    if (props.btnStyle === "tertiary") {
      return props.theme.colors.tertiary;
    }
    return props.theme.colors.transparent;
  }};

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`;

export const ExternalCTAButton = styled.a`
  ${buttonStyles}
  background-color: ${props => {
    if (props.btnStyle === "primary") {
      return props.theme.colors.primary;
    }
    if (props.btnStyle === "secondary") {
      return props.theme.colors.secondary;
    }
    if (props.btnStyle === "tertiary") {
      return props.theme.colors.tertiary;
    }
    return props.theme.colors.transparent;
  }};
  border-color: ${props => {
    if (props.btnStyle === "primary") {
      return props.theme.colors.primary;
    }
    if (props.btnStyle === "secondary") {
      return props.theme.colors.secondary;
    }
    if (props.btnStyle === "tertiary") {
      return props.theme.colors.tertiary;
    }
    return props.theme.colors.transparent;
  }};

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`;
