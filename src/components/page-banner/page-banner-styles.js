import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";
import { Container } from "../common-styles";

/*
export const Banner = styled(BackgroundImage)`
  position: fixed !important;
  top: ${props => props.theme.header.height};
  left: 0;
  z-index: -1;
  width: 100%;
  height: 25vw;
  background-position: center top -${props => props.theme.header.height};
  background-size: 100% !important;

  @media (max-width: 600px) {
    padding-bottom: 180px;
  }
`;
*/

export const Banner = styled.div`
  position: fixed !important;
  top: ${props => props.theme.header.height};
  left: 0;
  z-index: -1;
  width: 100%;
  height: 25vw;
  background-position: center top -${props => props.theme.header.height};
  background-size: 100% !important;

  @media (max-width: 600px) {
    padding-bottom: 180px;
  }
`;

export const BannerContent = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vw;

  @media (max-width: 600px) {
    height: 180px;
  }

  h1 {
    margin: 0;
  }
`;
