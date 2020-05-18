/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from "../components/common-styles";
import { PageContent, TwoColumns, Main, Sidebar } from "./layout-styles";
import PageBanner from "../components/page-banner";
import useBlogposts from "../hooks/useBlogposts";
import SelectedBlogposts from "../components/blog-selected-list";

/** ***************************************************************************
 *  Blog Post Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *  - the page body
 *************************************************************************** */

const BlogPost = ({ pageContext }) => {
  const fields = pageContext.fields;
  const { pageTitle, pageIntro, hasBanner, banner } = fields.pageIntroduction;
  const pageBody = pageContext.body;
  const numberPosts = 3;
  const excludePost = pageTitle;

  const latestPosts = useBlogposts({ numberPosts, excludePost });

  return (
    <>
      {hasBanner && <PageBanner properties={banner} title={pageTitle} />}
      <PageContent>
        <Container>
          {!hasBanner && <h1>{pageTitle}</h1>}

          <TwoColumns>
            <Main>
              <MDXRenderer>{pageBody}</MDXRenderer>
            </Main>
            <Sidebar>
              <h2>Latest Blogposts</h2>
              <SelectedBlogposts posts={latestPosts} />
            </Sidebar>
          </TwoColumns>
        </Container>
      </PageContent>
    </>
  );
};

BlogPost.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default BlogPost;
