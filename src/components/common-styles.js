import styled from "@emotion/styled";
import { Link } from "gatsby";

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

export const Hamburger = styled.button`
  position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  border: none;
  margin-left: auto;

  @media (min-width: 767px) {
    display: none;
  }

  &:focus {
    outline: 0;
  }

  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 4px;
    width: 30px;
    background-color: #000;
    position: absolute;
    top: 15px;
    display: block;
    content: "";
    transition: all 0.3s ease-in-out;
  }
  span:before {
    top: -8px;
  }
  span:after {
    top: auto;
    bottom: -8px;
  }
  &:hover {
    span,
    span:before,
    span:after {
      background: #666;
    }
  }

  &.active {
    span {
      background-color: transparent;
    }
    span:before,
    span:after {
      top: 0;
    }
    span:before {
      transform: rotate(45deg);
    }
    span:after {
      transform: rotate(-45deg);
    }
    &:hover {
      span:before,
      span:after {
        background-color: #000;
      }
    }
  }
`;

export const InternalCTA = styled(Link)`
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

export const ExternalCTA = styled.a`
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
    30% {
      letter-spacing: 4px;
      opacity: 1;
    }
    100% {
      letter-spacing: 4px;
      opacity: 1;
    }
  }
`;
