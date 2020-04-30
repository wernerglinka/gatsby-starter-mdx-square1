import React, { useState } from "react";
import PropTypes from "prop-types";

import getNewsroomItems from "../../hooks/useNewsroom";
import InfoCard from "../info-card";

import { List, FilterList, FilterItem } from "./news-list-styles";

/** ***************************************************************************
 *  News List Component
 *  Generic list component. receives a list and a component which
 *  determines how to render individual list items
 *************************************************************************** */

const NewsList = () => {
  const [filterState, setFilterState] = useState("all");
  const [items, filters] = getNewsroomItems();

  return (
    <>
      <FilterList>
        {filters.map(item => (
          <FilterItem>{item}</FilterItem>
        ))}
      </FilterList>
      <List>
        {items.map((item, i) => (
          <InfoCard key={`${item.title}${i}`} items={item} />
        ))}
      </List>
    </>
  );
};

NewsList.propTypes = {};

export default NewsList;
