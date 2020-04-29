import React from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import useBgImage from "../../hooks/useBgImage";

import {} from "./news-list-styles";

/** ***************************************************************************
 *  News List Component
 *************************************************************************** */

const NewsList = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item, i) => (
        <li key={`${item.title}${i}`}>{item.title}</li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  items: PropTypes.shape().isRequired,
};

export default NewsList;
