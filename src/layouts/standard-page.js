/* global window */

import React from "react";
import PropType from "prop-types";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../utilities/md-to-html";
import allComponents from "../components/index";
import { Container } from "../components/common-styles";
import SectionWrapper from "../components/page-section-wrapper";
import { PageContent, PageIntro } from "./layout-styles";
import PageBanner from "../components/page-banner";
import MainNav from "../components/main-navigation";

/** ***************************************************************************
 *  Standard Page Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *************************************************************************** */

const StandardPage = ({ pageContext }) => {
  const { hasBanner, banner, pageTitle, pageIntro } = pageContext.fields.pageIntroduction;
  const pageSections = pageContext.fields.sections;
  // get page banner properties

  return (
    <>
      {hasBanner && <PageBanner properties={banner} title={pageTitle} />}
      <PageContent>
        <Container>
          {!hasBanner && <h1>{pageTitle}</h1>}
          <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(pageIntro) }} />
        </Container>

        <MainNav />

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
