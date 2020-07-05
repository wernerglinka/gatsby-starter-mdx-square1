import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import useSiteNav from "../../hooks/useSiteNav";
import Promo from "./promo";
import { Container } from "../common-styles";

import LinkLists from "./link-lists";

import { MenuPane, DropShadowMask, MenuColumns, MenuColumn, TitleWrapper, ListsWrapper } from "./submenu-pane-styles";

/** ***************************************************************************
 *  SubMenuPane Component
 *  Builds a sub menu pane for the main menu
 *************************************************************************** */
const SubMenuPane = ({ itemID }) => {
  const allNavLinks = useSiteNav();
  const subMenus = allNavLinks.subLevel;

  const LIST_LENGTH_LIMIT = 6;

  // look for the nav object that matches the itemID of the parent link
  const thisSubMenu = subMenus.filter(subMenu => subMenu.childOf === itemID);

  return (
    <DropShadowMask>
      <MenuPane>
        <Container>
          <MenuColumns>
            {thisSubMenu[0].linkGroup.map(column => (
              <MenuColumn key={column.title}>
                <TitleWrapper>{column.title}</TitleWrapper>
                <ListsWrapper>
                  <LinkLists links={column.links} maxLength={LIST_LENGTH_LIMIT} />
                </ListsWrapper>
              </MenuColumn>
            ))}

            {thisSubMenu[0].hasPromo && (
              <MenuColumn>
                <Promo promoID={thisSubMenu[0].promoID} />
              </MenuColumn>
            )}
          </MenuColumns>
        </Container>
      </MenuPane>
    </DropShadowMask>
  );
};

SubMenuPane.propTypes = {
  itemID: PropTypes.string.isRequired,
};

export default SubMenuPane;
