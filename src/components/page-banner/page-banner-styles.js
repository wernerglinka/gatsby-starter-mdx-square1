import styled from "@emotion/styled";
import { Container } from "../common-styles";

export const Banner = styled.div`
  position: fixed !important;
  top: ${props => props.theme.header.height};
  left: 0;
  z-index: -1;
  width: 100vw;

  img {
    display: block;
    margin: 0 auto;
  }
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
    background-color: rgba(0, 0, 0, 0.7);
    color: red;
  }
`;
