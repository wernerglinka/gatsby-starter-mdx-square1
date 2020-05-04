import styled from "@emotion/styled";
import { Container } from "../common-styles";

export const TopMsg = styled.aside`
  position: relative;
  top: ${props => (props.inTransition ? "-100px" : "0")};
  left: 0;
  width: 100%;
  z-index: 1;
  min-height: ${props => (props.inTransition ? "0" : "60px")};
  height: ${props => (props.inTransition ? "0" : "auto")};
  background-color: #54565a;
  transition: all 0.5s ease-in-out;

  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      position: absolute;
      top: 21px;
      right: 30px;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: red;
      }

      @media (max-width: 1200px) {
        right: 50px;
      }
      @media (max-width: 1024px) {
        right: 30px;
      }
      @media (max-width: 870px) {
        right: 25px;
      }
    }
  }

  p {
    font-size: 16px;
    padding: 15px 30px;
    color: #fff;
    text-align: center;
    margin: 0;

    a {
      white-space: nowrap;
      color: #f0f0f0;
      font-size: 0.825em;
      text-decoration: none;
      padding-left: 10px;

      &:after {
        content: url(/icons/link-arrow-light.svg);
        display: inline-block;
        width: 50px;
        padding-left: 10px;
        transition: all 0.3s ease-in-out;
      }

      &:hover:after {
        padding-left: 20px;
      }
    }
  }
`;
