import styled from "@emotion/styled";

export const ImageWrapper = styled.div``;

export const Inner = styled.div`
  position: relative;
  width: 100%;

  /* covers the whole thumbnail image so clicking on it invokes the video */
  button {
    display: block;
    padding: 0;
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;

    /* the fade container for inline viewing follows the button */
    & + div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }

  /* the close icon for inline video play */
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

/* the play icon in the center if the thumbnail image */
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

/* responsive video wrapper */
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  width: 70%;
  margin-left: -35%;
  padding: 40px;
  background-color: #fff;

  /* the close icon for modal video play */
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
