import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0 20px;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.img`
  margin: 0;
`;

export const MainMenu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0 20px;

    > a {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  @media (max-width: ${props => props.theme.tabletBreakpoint}) {
    position: fixed;
    top: 80px;
    right: -330px;
    width: 320px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.95);
    transition: all 0.5s ease-in;

    li {
      display: block;
      padding-bottom: 30px;

      > a {
        font-size: 16px;
      }
    }

    &.active {
      transform: translate(-330px);
    }
  }
`;
