/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../utilities/md-to-html";
import allComponents from "../components/index";
import { Container } from "../components/common-styles";
import SectionWrapper from "../components/page-section-wrapper";
import useBlogposts from "../hooks/useBlogposts";
import { PageContent, PageIntro } from "./layout-styles";

/** ***************************************************************************
 *  Blog Post Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *  - the page body
 *************************************************************************** */

const BlogPost = ({ pageContext }) => {
  const { pageTitle, pageIntro, hasBanner } = pageContext.fields.pageIntroduction;

  const allBlogposts = useBlogposts("*");

  console.log(useBlogposts());

  return (
    <>
      <PageContent>
        <Container>
          {!hasBanner && <h1>{pageTitle}</h1>}
          <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />
        </Container>

        <ul>
          {allBlogposts.map(post => {
            console.log(post);
            return (
              <li key={post.title}>
                <h3>{post.title}</h3>
                <p>{post.author}</p>
                <p>{post.category}</p>
              </li>
            );
          })}
        </ul>
      </PageContent>
    </>
  );
};

BlogPost.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default BlogPost;
