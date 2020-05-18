import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Wrapper = styled.p`
  > span {
    padding-right: 5px;
  }
  a {
    &:after {
      content: ",";
      padding-right: 5px;
    }
  }
  a:last-child:after {
    content: "";
  }
`;

const Authors = ({ post }) => {
  return (
    <Wrapper>
      <span>by</span>
      {post.map(single => {
        const authorPage = `blog/${single.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <Link key={single} to={authorPage}>
            {single}
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Authors;
