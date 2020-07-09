/* global window, document */

import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../utilities/md-to-html";
import allComponents from "../components/index";
import { Container } from "../components/common-styles";
import SectionWrapper from "../components/page-section-wrapper";
import { PageContent, PageIntro } from "./layout-styles";
import PageBanner from "../components/page-banner";
import cleanMarketoForm from "../utilities/clean-marketo-form";
import Head from "../components/head";
import useSiteMetadata from "../hooks/useSiteMetadata";
import blockedEmails from "../../content/data/blocked-email";

/** ***************************************************************************
 *  Form Page Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *************************************************************************** */

const StandardPage = props => {
  const { hasBanner, banner, pageTitle, pageIntro } = props.pageContext.fields.pageIntroduction;
  const fields = props.pageContext.fields;
  const pageSections = props.pageContext.fields.sections;

  const siteMetadata = useSiteMetadata();

  // page specific meta data
  const pageMetadata = {
    title: pageTitle,
    description: pageIntro,
  };

  return (
    <>
      <Head metaData={pageMetadata} form="//app-sjst.marketo.com/js/forms2/js/forms2.js" />

      {hasBanner && <PageBanner properties={banner} title={pageTitle} />}
      <PageContent>
        <Container>
          {!hasBanner && <h1>{pageTitle}</h1>}
          <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />
        </Container>

        {pageSections &&
          pageSections.map((section, i) => {
            const SectionComponent = allComponents[section.component];

            return (
              <SectionWrapper key={`${section.sectionID}${i}`}>
                <SectionComponent info={section} />
              </SectionWrapper>
            );
          })}
      </PageContent>
    </>
  );
};

StandardPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default StandardPage;
