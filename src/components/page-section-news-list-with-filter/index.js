import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getNewsroomItems from "../../hooks/useNewsroom";
import InfoCard from "../info-card";
import { List, FilterList, FilterItem } from "./news-list-styles";
// Isotope requires window to be present. It is not during site build, ergo:
// https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-window-is-defined
const Isotope = typeof window !== `undefined` ? require("isotope-layout") : null;

/** ***************************************************************************
 *  News List Component
 *  Generic list component. receives a list and a component which
 *  determines how to render individual list items
 *************************************************************************** */

const NewsList = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("all");
  const [items, filters] = getNewsroomItems();

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setIsotope(
      new Isotope(".grid", {
        itemSelector: ".grid-item",
        masonry: {
          columnWidth: 260,
          isFitWidth: true,
        },
      })
    );
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (isotope) {
      filterKey === "all" ? isotope.arrange({ filter: `*` }) : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <>
      <FilterList>
        {filters.map(item => (
          <FilterItem key={item}>
            <label htmlFor="filter" onClick={() => setFilterKey(item)}>
              <input type="radio" name="filter" value={item} defaultChecked={item === "all"} />
              <span>{item}</span>
            </label>
          </FilterItem>
        ))}
      </FilterList>
      <List className="grid">
        {items.map((item, i) => {
          console.log(item);
          return <InfoCard key={`${item.title}${i}`} items={item} />;
        })}
      </List>
    </>
  );
};

NewsList.propTypes = {};

export default NewsList;
