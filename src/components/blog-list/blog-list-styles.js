import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${props => props.theme.sections.clearance};

  li {
    flex: 0 0 33%;
    padding: 20px;

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }
  }
`;

export const BlogCard = styled.div`
  > div {
    position: relative;
  }

  h3 {
    position: absolute;
    top: 20%;
    right: 5px;
    left: 5px;
    color: #fff;
    margin: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  time {
    position: absolute;
    bottom: 10px;
    right: 5px;
    color: #fff;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Authors = styled.p`
  span {
    &:after {
      content: ",";
      padding-right: 5px;
    }
  }
  span:last-child:after {
    content: "";
  }
`;
