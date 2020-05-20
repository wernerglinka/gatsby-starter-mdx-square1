import styled from "@emotion/styled";

export const TabsContainer = styled.section``;

export const TabsHeader = styled.ul`
  border-bottom: 1px solid #f0f0f0;

  li {
    display: inline-block;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    margin-bottom: -1px;

    &.active {
      background-color: #fff;
      border-color: #f0f0f0 #f0f0f0 transparent #f0f0f0;
    }

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    button {
      background: none;
      border: 0;
      padding: 10px 20px;
    }
  }
`;

export const TabsContent = styled.div`
  > div {
    display: none;

    &.active {
      display: block;
    }
  }
`;
