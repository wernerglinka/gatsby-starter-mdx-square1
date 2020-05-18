import styled from "@emotion/styled";

export const SocialShareList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 5px;
    height: 32px;
    line-height: 32px;
    color: #6d6d6d;
    font-size: 14px;

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    &:first-child {
      margin-left: 0;
    }
  }

  a {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #7d7d7d;
    text-align: center;
    padding-top: 2px;

    &:hover {
      background-color: #02b2e2;
    }

    svg {
      color: #fff;
    }
  }
`;
