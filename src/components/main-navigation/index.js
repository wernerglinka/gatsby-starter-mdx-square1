import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import useSiteNav from "../../hooks/useSiteNav";
import SubMenuPane from "./submenu-pane";

import { MainMenu } from "./main-navigation-styles";

/** ***************************************************************************
 *  Main menu Component
 *  Builds the main navigation menu
 *************************************************************************** */
const MainNav = props => {
  const allNavLinks = useSiteNav();
  const topLevelItems = allNavLinks.topLevel;

  return (
    <MainMenu>
      {topLevelItems.map(link => (
        <li key={link.url} className={link.itemID}>
          <Link to={link.url} activeClassName="active" partiallyActive>
            {link.label}
          </Link>
          {link.hasSubMenu && <SubMenuPane itemID={link.itemID} />}
        </li>
      ))}
    </MainMenu>
  );
};

MainNav.propTypes = {};

export default MainNav;
