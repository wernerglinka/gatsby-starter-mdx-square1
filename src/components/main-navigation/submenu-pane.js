import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import useSiteNav from "../../hooks/useSiteNav";

const MenuPane = styled.div``;

const MenuColumn = styled.div``;

const TitleWrapper = styled.div``;

/** ***************************************************************************
 *  SubMenuPane Component
 *  Builds a sub menu pane for the main menu
 *************************************************************************** */
const SubMenuPane = ({ itemID }) => {
  const allNavLinks = useSiteNav();
  const subMenus = allNavLinks.subLevel;

  // look for the nav object that matches the itemID of the parent link
  const thisSubMenu = subMenus.filter(subMenu => subMenu.childOf === itemID);

  console.log(thisSubMenu[0]);

  return (
    <MenuPane>
      {thisSubMenu[0].linkGroup.map(column => (
        <MenuColumn key={column.title}>
          <TitleWrapper>{column.title}</TitleWrapper>
          <ul>
            {column.links.map(menuItem => (
              <li key={menuItem.label}>
                <Link to={menuItem.url}>{menuItem.label}</Link>
              </li>
            ))}
          </ul>
        </MenuColumn>
      ))}
    </MenuPane>
  );
};

SubMenuPane.propTypes = {
  itemID: PropTypes.string.isRequired,
};

export default SubMenuPane;
