import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const DropShadowMask = styled.div`
  position: fixed;
  top: ${props => (props.hasTopbar ? props.theme.header.heightWithTopbar : props.theme.header.height)};
  left: 0;
  right: 0;
  z-index: 1000;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const MenuPane = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  padding: 40px;
  background-color: #fafafa;
  margin-bottom: 40px;
`;

export const MenuColumns = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const MenuColumn = styled.div`
  padding-right: 100px;

  &:last-of-type {
    padding: 0;
  }

  ul {
    padding: 0;
  }

  /* overwrite default bullets */
  li {
    padding: 5px 20px 5px 0;
    position: relative;

    &:before {
      display: none;
    }

    &.empty {
      height: 34px;
    }

    > a {
      display: block;
      padding-left: 20px;
      position: relative;

      svg {
        position: absolute;
        top: 3px;
        left: 0;
        width: 18px;
        height: 18px;

        g {
          stroke: ${props => props.theme.colors.contrast};
        }
      }
    }

    &.hasFlag {
      span:after {
        content: "NEW";
        font-size: 10px;
        padding-left: 5px;
        position: relative;
        top: -5px;
      }
    }
  }
`;

export const ListsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  ul {
    padding-right: 50px;
  }
`;

export const TitleWrapper = styled.p`
  margin: 0 0 10px;
  padding: 0 0 5px;
  text-transform: uppercase;
  color: #666;
  font-size: 12px;
  border-bottom: ${props => props.theme.defaultBorder};
`;
