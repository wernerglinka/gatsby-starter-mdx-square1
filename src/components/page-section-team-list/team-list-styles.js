import styled from "@emotion/styled";

export const SectionWrapper = styled.section``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  /* overwrite default bullets */
  li:before {
    border: none;
    /* move out of the flow so it doesn't occupy space */
    position: absolute;
  }
`;

export const TeamCard = styled.li`
  flex: 0 0 200px;
  margin: 10px;
  background-color: #fff;

  .prose {
    position: relative;
    height: 230px;
    padding: 10px 10px 50px;

    h3 {
      margin-bottom: 10px;
      font-size: 1.2rem;
      height: 50px;
    }

    h3 + p + ul {
      position: absolute;
      left: 5px;
      bottom: 30px;
    }

    .read-more {
      position: absolute;
      left: 10px;
      bottom: 10px;
      cursor: pointer;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  animation-duration: 0.5s;
  animation-name: fadeIn;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.isClosing {
    animation-name: fadeOut;

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  flex: 0 0 60%;
  padding: 70px;
  background-color: #fff;
  overflow: scroll;
  max-height: 100vh;
  animation-duration: 0.5s;
  animation-name: slideUp;

  @keyframes slideUp {
    from {
      margin-top: 20px;
    }
    to {
      margin-top: 0;
    }
  }

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    padding: 70px 20px;
    border-radius: 0;
  }

  .header {
    display: flex;
    justify-content: flex-start;

    .gatsby-image-wrapper {
      flex: 0 0 200px;
    }
  }
  .prose {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      margin: 0;
      font-size: 32px;
      line-height: 1.2;
    }
    p {
      margin: 0;
      font-size: 16px;
      line-height: 1.625;
    }
    li {
      a {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #cdcdcd;
        line-height: 30px;
        text-align: center;

        svg {
          position: relative;
          top: 3px;
          color: #fff;
        }
      }
    }
  }
  .bio {
    padding-top: 50px;
    line-height: 1.625;
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    svg {
      height: 1.5em;
      width: 1.5em;
    }
  }
`;
