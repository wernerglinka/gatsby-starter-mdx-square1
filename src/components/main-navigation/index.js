import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import useSiteNav from "../../hooks/useSiteNav";
import SubMenuPane from "./submenu-pane";

const MainNav = props => {
  const allNavLinks = useSiteNav();
  const topLevelItems = allNavLinks.topLevel;

  return (
    <ul>
      {topLevelItems.map(link => (
        <li key={link.url}>
          <Link to={link.url}>{link.label}</Link>
          {link.hasSubMenu && <SubMenuPane itemID={link.itemID} />}
        </li>
      ))}
    </ul>
  );
};

MainNav.propTypes = {};

export default MainNav;
