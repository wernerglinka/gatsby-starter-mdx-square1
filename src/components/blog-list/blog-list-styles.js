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

    > div {
      /* needed so child can have height in % */
      height: 100%;
    }
  }
`;

export const BlogCard = styled.div`
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
  a {
    &:after {
      content: ",";
      padding-right: 5px;
    }
  }
  a:last-child:after {
    content: "";
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  /* needs a 100% set on parent */
  height: 60%;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
