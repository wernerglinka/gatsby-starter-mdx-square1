import React, { useState } from "react";
import { Link } from "gatsby";

import useSiteNav from "../../hooks/useSiteNav";

import Button from "../button";

import SubMenuPane from "./submenu-pane";

import { MainMenu } from "./main-navigation-styles";

/** ***************************************************************************
 *  Main menu Component
 *  Builds the main navigation menu
 *************************************************************************** */
const MainNav = () => {
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
        <li
          key={link.url}
          menuid={link.itemID}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={link.itemClass || null}
        >
          {link.buttonAttr ? (
            <Button buttonAttr={link.buttonAttr} to={link.url} buttonText={link.label} />
          ) : (
            <>
              <Link to={link.url} activeClassName="active" partiallyActive onClick={() => setMenuPaneOpen("")}>
                {link.label}
              </Link>
              {link.hasSubMenu && (
                <SubMenuPane itemID={link.itemID} menuPaneOpen={menuPaneOpen} setMenuPaneOpen={setMenuPaneOpen} />
              )}
            </>
          )}
        </li>
      ))}
    </MainMenu>
  );
};

MainNav.propTypes = {};

export default MainNav;
