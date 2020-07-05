import styled from "@emotion/styled";

export const MainMenu = styled.ul`
  list-style: none;

  > li {
    display: inline-block;

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    > a {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      line-height: ${props => props.theme.header.height};
      padding: 0 15px;

      &.active {
        background-color: #f8f8f8;
      }
    }

    &.projects > div {
      display: block;
    }
  }
`;
