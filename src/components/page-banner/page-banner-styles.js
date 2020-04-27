import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";
import { Container } from "../common-styles";

export const Banner = styled(BackgroundImage)`
  height: 0;
  padding-bottom: 25%;
  margin: 0 -${props => props.theme.bodySidePadding} ${props => props.theme.sectionClearance};
  background-attachment: fixed;
  background-position: center top -80px;

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
