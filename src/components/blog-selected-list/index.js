import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import NiceDate from "../../utilities/nice-date";
import { SelectedBlogList } from "./selected-blogpost-list-styles";
import Authors from "../authors";

const BlogList = ({ posts }) => (
  <SelectedBlogList>
    {posts.map(post => {
      return (
        <li key={post.title}>
          <h3>
            <Link to={post.cta.URL}>{post.title}</Link>
          </h3>
          <NiceDate startDate={post.date} />
          <Authors post={post.author} />
        </li>
      );
    })}
  </SelectedBlogList>
);

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
};
