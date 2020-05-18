/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from "../components/common-styles";
import { PageContent, TwoColumns, Main, Sidebar } from "./layout-styles";
import PageBanner from "../components/page-banner";
import useBlogposts from "../hooks/useBlogposts";
import useAuthors from "../hooks/useAuthors";
import SelectedBlogposts from "../components/blog-selected-list";
import Authors from "../components/authors";
import ShareLinks from "../components/share-links";

/** ***************************************************************************
 *  Blog Post Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *  - the page body
 *************************************************************************** */

const BlogPost = props => {
  const { pageContext, location } = props;
  const { fields } = pageContext;
  const { pageTitle, hasBanner, banner } = fields.pageIntroduction;
  const { href } = location;
  const { body: pageBody } = pageContext;

  // get the latest 3 blogpost but exclude the current blogpost if it happens
  // to be among the latest
  const numberPosts = 3;
  const excludePost = pageTitle;
  const latestPosts = useBlogposts({ numberPosts, excludePost });

  // get the author name from the author file reference to use <Authors />
  const authors = fields.author.map(author => useAuthors(author)[0].name);

  return (
    <>
      {hasBanner && <PageBanner properties={banner} title={pageTitle} />}
      <PageContent>
        <Container>
          {!hasBanner && <h1>{pageTitle}</h1>}

          <Authors post={authors} />

          <TwoColumns>
            <Main>
              <MDXRenderer>{pageBody}</MDXRenderer>
            </Main>
            <Sidebar>
              <h2>Latest Blogposts</h2>
              <SelectedBlogposts posts={latestPosts} />

              <ShareLinks pageURL={href} title={pageTitle} description={fields.pageMetadata.metaDescription} />
            </Sidebar>
          </TwoColumns>
        </Container>
      </PageContent>
    </>
  );
};

BlogPost.propTypes = {
  pageContext: PropType.shape().isRequired,
  location: PropType.shape().isRequired,
};

export default BlogPost;
