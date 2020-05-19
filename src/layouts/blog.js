/* global window */

import React from "react";
import PropType from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "../components/common-styles";
import useBlogposts from "../hooks/useBlogposts";
import { PageContent, PageIntro } from "./layout-styles";
import BlogCategoriesList from "../components/blog-categories-list";
import BlogList from "../components/blog-list";
import PageBanner from "../components/page-banner";

/** ***************************************************************************
 *  Blog List Template
 *  This template is used to list blogposts by:
 *  - Category
 *  - Author
 *  - ToDo Year
 *************************************************************************** */

const BlogPost = ({ pageContext }) => {
  const blogCategories = pageContext.blogCategories;
  const { pageTitle, pageIntro, hasBanner, banner } = pageContext.fields.pageIntroduction;
  const byCategory = pageContext.fields.category || "all";
  const byAuthor = pageContext.fields.author || "all";

  const allBlogposts = useBlogposts({ byCategory, byAuthor });

  return (
    <>
      {hasBanner && <PageBanner properties={banner} title={pageTitle} />}
      <PageContent>
        <Container>
          {!hasBanner && <h1 className="pageTitle">{pageTitle}</h1>}
          {pageIntro && <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />}

          <BlogCategoriesList categories={blogCategories} thisCategory={byCategory} />

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
