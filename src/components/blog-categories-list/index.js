import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { CategoriesList } from "./blog-categories-list-styles";

const BlogCategoriesList = ({ categories, thisCategory }) => (
  <CategoriesList>
    {categories.map(category => (
      <li key={category} className={thisCategory === category ? "active" : null}>
        <Link to={`/blog/${category}`}>{category}</Link>
      </li>
    ))}
  </CategoriesList>
);

BlogCategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  thisCategory: PropTypes.string.isRequired,
};

export default BlogCategoriesList;
