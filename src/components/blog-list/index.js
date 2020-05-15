import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CTA from "../cta";
import NiceDate from "../../utilities/nice-date";

import { Wrapper, BlogCard, Authors } from "./blog-list-styles";

const BlogList = ({ posts }) => (
  <Wrapper>
    {posts.map(post => {
      return (
        <li key={post.title}>
          <BlogCard>
            <div>
              <img src={post.thumbnail} alt="" />
              <h3>{post.title}</h3>
              <NiceDate startDate={post.date} />
            </div>

            <Authors>
              {post.author.map(single => {
                const authorPage = `blog/${single.replace(/\s+/g, "-").toLowerCase()}`;
                return (
                  <Link key={single} to={authorPage}>
                    {single}
                  </Link>
                );
              })}
            </Authors>
            <CTA cta={post.cta} />
          </BlogCard>
        </li>
      );
    })}
  </Wrapper>
);

export default BlogList;

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
};
