/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "../components/common-styles";
import { PageContent, PageIntro } from "./layout-styles";

/** ***************************************************************************
 *  Long Text Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - the page body
 *************************************************************************** */

const StandardPage = ({ pageContext }) => {
  const { hasBanner, pageTitle, pageIntro } = pageContext.fields.pageIntroduction;
  const pageBody = pageContext.body;

  return (
    <>
      <PageContent>
        <Container>
          {!hasBanner && <h1>{pageTitle}</h1>}
          <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />

          <MDXRenderer>{pageBody}</MDXRenderer>
        </Container>
      </PageContent>
    </>
  );
};

StandardPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default StandardPage;
