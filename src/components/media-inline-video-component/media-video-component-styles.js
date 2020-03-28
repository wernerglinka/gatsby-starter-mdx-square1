import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &.image-left {
    flex-direction: row-reverse;
  }

  > * {
    flex: 0 0 50%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;

    & + p {
      font-style: italic;
      margin-bottom: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`;

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
  position: abolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
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
