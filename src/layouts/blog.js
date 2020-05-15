/* global window */

import React from "react";
import PropType from "prop-types";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "../components/common-styles";
import useBlogposts from "../hooks/useBlogposts";
import useAuthors from "../hooks/useAuthors";
import { PageContent, PageIntro } from "./layout-styles";

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
          {!hasBanner && <h1>{pageTitle}</h1>}
          {pageIntro && <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />}
        </Container>

        <ul>
          {blogCategories.map(category => (
            <li key={category} className={thisCategory === category ? "active" : null}>
              {category}
            </li>
          ))}
        </ul>

        <ul>
          {allBlogposts.map(post => {
            return (
              <li key={post.title}>
                <h3>{post.title}</h3>
                <p>
                  {post.author.map(single => (
                    <span key={single}>{single}</span>
                  ))}
                </p>
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
