import styled from "@emotion/styled";
import { Container } from "../common-styles";

export const Banner = styled.div`
  position: relative;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  background-color: #ccc;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 25%;
`;

export const BannerContent = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 180px;
  }

  h1 {
    margin: 0;
    padding: 40px;
    color: #fff;
    font-size: 60px;
    text-shadow: ${props => props.theme.textShadow};
  }
`;
