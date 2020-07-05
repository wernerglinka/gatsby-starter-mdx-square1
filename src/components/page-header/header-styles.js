import styled from "@emotion/styled";

export const HeaderInner = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: ${props => props.theme.header.height};
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0 20px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: ${props => props.theme.header.height};

  & > ${HeaderInner} {
    position: ${props => (props.isFixed ? "fixed" : "static")};
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.header.height};
`;

export const Logo = styled.img`
  margin: 0;
`;

export const MainMenu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0 15px;

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
    }
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: 80px;
  right: -100vw;
  bottom: 0;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.5s ease-in;

  ul {
    width: 80vw;
    margin: 50px auto 0;
  }

  li {
    padding-bottom: 30px;

    > a {
      font-size: 18px;
    }
  }

  &.active {
    transform: translate(-100vw);
  }
`;
