import styled from "@emotion/styled";

export const SectionWrapper = styled.div``;

export const ImageWrapper = styled.div``;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  button {
    display: block;
    padding: 0;
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;

    & + div {
      position: abolute;
      z-index: 2;
    }
  }

  svg {
    position: absolute;
    top: -30px;
    right: 0;

    &:hover {
      cursor: pointer;
      color: #ff0000;
    }
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -30px 0 0 -30px;
  width: 60px;
  height: 60px;
  transition: all 0.5s ease-in-out;

  &:after {
    position: absolute;
    top: 14px;
    left: 18px;
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-width: 16px 32px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    transition: all 0.5s ease-in-out;
  }

  &:hover:after {
    border-color: transparent transparent transparent #ff0000;
  }
`;

export const VideoWrapper = styled.div`
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
  }
`;
