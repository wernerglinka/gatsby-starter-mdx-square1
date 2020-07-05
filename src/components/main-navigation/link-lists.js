import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

// get site icons index file. Index icons with property "icon"
import Icons from "../site-icons/index";

/** ***************************************************************************
 *  LinkLists Component
 *  Assemble a list of links
 *  If list is too long create multiple columns
 *  By injecting empty list items create spaing is desired
 *************************************************************************** */

const LinkLists = ({ links, maxLength }) => {
  // divide links into groups of same size, except last one
  // will be used to build link columns
  const listGroup = links.reduce((allLists, item, index) => {
    const chunkIndex = Math.floor(index / maxLength);

    if (!allLists[chunkIndex]) {
      allLists[chunkIndex] = []; // start a new chunk
    }

    allLists[chunkIndex].push(item);

    return allLists;
  }, []);

  return listGroup.map(linkColumn => (
    <ul>
      {linkColumn.map(menuItem => {
        // get icon for this link via site icons index file
        const Icon = menuItem.icon ? Icons[menuItem.icon] : null;

        return (
          <li key={menuItem.label} className={menuItem.linkClass}>
            {menuItem.linkClass !== "empty" && (
              <Link to={menuItem.url}>
                {Icon && <Icon />}
                <span>{menuItem.label}</span>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  ));
};

LinkLists.propTypes = {
  links: PropTypes.shape().isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default LinkLists;
