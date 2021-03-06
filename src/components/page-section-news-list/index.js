import React from "react";
import PropTypes from "prop-types";

import getNewsroomItems from "../../hooks/useNewsroom";
import NewsCard from "../news-card";

import { List } from "./news-list-styles";

/** ***************************************************************************
 *  News List Component
 *  Generic list component. receives a list and a component which
 *  determines how to render individual list items
 *************************************************************************** */

const NewsList = () => {
  const [items] = getNewsroomItems();

  return (
    <List>
      {items.map((item, i) => (
        <NewsCard key={`${item.title}${i}`} items={item} />
      ))}
    </List>
  );
};

NewsList.propTypes = {};

export default NewsList;
