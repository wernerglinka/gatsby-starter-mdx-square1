/* global window */

import React from "react";
import PropType from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "../components/common-styles";
import useBlogposts from "../hooks/useBlogposts";
import useAuthors from "../hooks/useAuthors";
import { PageContent, PageIntro } from "./layout-styles";
import BlogCategoriesList from "../components/blog-categories-list";
import BlogList from "../components/blog-list";
import CTA from "../components/cta";

/** ***************************************************************************
 *  Blog Categories Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *  - the page body
 *************************************************************************** */

const BlogPost = ({ pageContext }) => {
  const blogCategories = pageContext.blogCategories;
  const { pageTitle, pageIntro, hasBanner } = pageContext.fields.pageIntroduction;
  const thisCategory = pageContext.fields.category || "all";
  const allBlogposts = useBlogposts("all", thisCategory);

  return (
    <>
      <PageContent>
        <Container>
          {!hasBanner && <h1 className="pageTitle">{pageTitle}</h1>}
          {pageIntro && <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />}

          <BlogCategoriesList categories={blogCategories} thisCategory={thisCategory} />

          <BlogList posts={allBlogposts} />
        </Container>
      </PageContent>
    </>
  );
};

BlogPost.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default BlogPost;
