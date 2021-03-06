import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import useSiteNav from "../../hooks/useSiteNav";

import { Container } from "../common-styles";
import Promo from "./promo";
import LinkLists from "./link-lists";

import TopbarContext from "../../contexts/topbar-context";

import { MenuPane, DropShadowMask, MenuColumns, MenuColumn, TitleWrapper, ListsWrapper } from "./submenu-pane-styles";

/** ***************************************************************************
 *  SubMenuPane Component
 *  Builds a sub menu pane for the main menu
 *************************************************************************** */
const SubMenuPane = ({ itemID, menuPaneOpen, setMenuPaneOpen }) => {
  const allNavLinks = useSiteNav();
  const subMenus = allNavLinks.subLevel;
  const hasTopbar = useContext(TopbarContext);
  const LIST_LENGTH_LIMIT = 6;

  // look for the nav object that matches the itemID of the parent link
  const thisSubMenu = subMenus.filter(subMenu => subMenu.childOf === itemID);

  return (
    <DropShadowMask hasTopbar={hasTopbar}>
      <CSSTransition in={itemID === menuPaneOpen} appear timeout={300} classNames="show-menu" unmountOnExit>
        <MenuPane>
          <Container>
            <MenuColumns>
              {thisSubMenu[0].linkGroup.map(column => (
                <MenuColumn key={column.title}>
                  <TitleWrapper>{column.title}</TitleWrapper>
                  <ListsWrapper>
                    <LinkLists links={column.links} maxLength={LIST_LENGTH_LIMIT} setMenuPaneOpen={setMenuPaneOpen} />
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
      </CSSTransition>
    </DropShadowMask>
  );
};

SubMenuPane.propTypes = {
  itemID: PropTypes.string.isRequired,
  menuPaneOpen: PropTypes.string.isRequired,
  setMenuPaneOpen: PropTypes.func.isRequired,
};

export default SubMenuPane;
