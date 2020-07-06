import React, { useState } from "react";
import { Link } from "gatsby";

import useSiteNav from "../../hooks/useSiteNav";

import SubMenuPane from "./submenu-pane";

import { MainMenu } from "./main-navigation-styles";

/** ***************************************************************************
 *  Main menu Component
 *  Builds the main navigation menu
 *************************************************************************** */
const MainNav = props => {
  const [menuPaneOpen, setMenuPaneOpen] = useState("");
  const allNavLinks = useSiteNav();
  const topLevelItems = allNavLinks.topLevel;

  function handleMouseEnter(e) {
    setMenuPaneOpen(e.target.parentElement.getAttribute("menuid"));
  }

  function handleMouseLeave() {
    setMenuPaneOpen("");
  }

  return (
    <MainMenu>
      {topLevelItems.map(link => (
        <li key={link.url} menuid={link.itemID} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to={link.url} activeClassName="active" partiallyActive>
            {link.label}
          </Link>
          {link.hasSubMenu && (
            <SubMenuPane itemID={link.itemID} menuPaneOpen={menuPaneOpen} setMenuPaneOpen={setMenuPaneOpen} />
          )}
        </li>
      ))}
    </MainMenu>
  );
};

MainNav.propTypes = {};

export default MainNav;
