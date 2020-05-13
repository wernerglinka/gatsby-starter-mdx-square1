import styled from "@emotion/styled";

export const MainPointsSection = styled.section`
  text-align: center;
  padding-bottom: 50px;

  h2 {
    padding: 40px 0 20px;
    margin: 0;
  }
  h2 + div > p {
    font-size: 20px;
  }

  /* the minimal version of a points wrapper */
  &.minimal {
    padding: 0;
  }
`;

export const PointsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-bottom: 50px;

  /* the minimal version of a points wrapper */
  &.minimal {
    padding: 0;
  }
`;
export const PointWrapper = styled.li`
  padding: 0 20px;
  flex: 0 0 33%;

  /* overwrite default bullets */
  &:before {
    border: none;
    /* move out of the flow so it doesn't occupy space */
    position: absolute;
  }

  > div {
    position: relative;
    height: 100%;
    border: 1px solid #f5f5f5;
    padding: 20px 20px 50px;

    img {
      display: block;
      width: 120px;
      margin: 0 auto;
    }
    div {
      text-align: left;
    }
    .pointHeader {
      height: 60px;
      padding-top: 20px;
      text-align: center;
      font-weight: bold;
    }
    p {
      margin: 0;
    }

    .pointHeader + div + a {
      display: block;
      position: absolute;
      left: 20px;
      bottom: 10px;
    }
  }

  /* the minimal version of a point */
  &.minimal {
    flex: 0 0 50%;

    > div {
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    img {
      display: none;
    }

    h3 {
      margin-top: 0;
      color: #f5f5f5;

      strong {
        font-weight: inherit;
        color: #cf0000;
      }
    }

    p {
      color: #f5f5f5;
      margin: 30px 0;
    }

    a {
      align-self: center;
    }
  }
`;
