import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CTA from "../cta";
import NiceDate from "../../utilities/nice-date";

import { ImageWrapper, Wrapper, BlogCard, Authors } from "./blog-list-styles";

const BlogList = ({ posts }) => (
  <Wrapper>
    {posts.map(post => {
      return (
        <li key={post.title}>
          <BlogCard>
            <ImageWrapper>
              <img src={post.thumbnail} alt="" />
              <h3>{post.title}</h3>
              <NiceDate startDate={post.date} />
            </ImageWrapper>

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
            <p>{post.category}</p>
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
