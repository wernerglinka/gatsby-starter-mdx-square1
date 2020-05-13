import styled from "@emotion/styled";
import Img from "gatsby-image";

export const SectionWrapper = styled.section``;

export const SliderWrapper = styled.div`
  position: relative;
  height: 100px;
`;

export const FadeOutLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100px;
  width: 100px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 80%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const FadeOutRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100px;
  width: 100px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const CustomerImage = styled.img`
  width: 100px;
  margin: 0 40px;
  filter: grayscale(1);
  opacity: 0.4 !important;
  transition: all 0.6s ease-in !important;

  &:hover {
    filter: grayscale(0);
    opacity: 1 !important;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  background-color: #f0f0f0;
  padding: 0;

  li {
    flex: 0 0 160px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    img {
      filter: grayscale(1);
      opacity: 0.4 !important;
      transition: all 0.6s ease-in !important;

      &:hover {
        filter: grayscale(0);
        opacity: 1 !important;
      }
    }
  }
`;
