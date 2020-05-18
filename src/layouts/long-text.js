/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import mdStringToHTML from "../utilities/md-to-html";
import { Container } from "../components/common-styles";
import { PageContent, PageIntro } from "./layout-styles";
import PageBanner from "../components/page-banner";

/** ***************************************************************************
 *  Long Text Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - the page body
 *************************************************************************** */

const LongTextPage = ({ pageContext }) => {
  const { hasBanner, banner, pageTitle, pageIntro } = pageContext.fields.pageIntroduction;
  const pageBody = pageContext.body;

  return (
    <>
      {hasBanner && <PageBanner properties={banner} title={pageTitle} />}
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

LongTextPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default LongTextPage;
