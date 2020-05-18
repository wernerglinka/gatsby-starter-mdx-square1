import styled from "@emotion/styled";

export const SelectedBlogList = styled.ul`
  padding: 0;

  li {
    padding-bottom: 50px;
    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    h3 {
      font-size: 20px;
      margin: 0 0 5px;
    }
    time {
      display: block;
      font-size: 14px;
    }
  }
`;
