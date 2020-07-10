import styled from "@emotion/styled";
import { Container } from "../common-styles";

export const TopMsg = styled.aside`
  background-color: #54565a;
  height: ${props => props.theme.topbar.height};

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
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

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
