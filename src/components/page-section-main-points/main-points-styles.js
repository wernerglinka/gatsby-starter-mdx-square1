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
`;

export const PointsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-bottom: 50px;
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

    h3 {
      height: 60px;
      padding-top: 20px;
      text-align: center;
    }

    div {
      text-align: left;
    }

    p {
      margin: 0;
    }

    h3 + div + a {
      display: block;
      position: absolute;
      left: 20px;
      bottom: 10px;
    }
  }
`;
