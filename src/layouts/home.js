/* global window */

import React from "react";
import PropType from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "@emotion/styled";
import titleCase from "ap-style-title-case";

import mdStringToHTML from "../utilities/md-to-html";

import allComponents from "../components/index";
import { Container } from "../components/common-styles";
import PageBanner from "../components/page-banner";
import SectionWrapper from "../components/page-section-wrapper";

const PageContent = styled.div`
  padding-top: 120px;

  &.hasBanner {
    padding-top: 0;
  }
`;

const PageIntro = styled.div`
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: ${props => props.theme.sections.clearance};
`;

/** ***************************************************************************
 *  Home Page Template
 *  This page layout renders:
 *  - banner
 *  - header/intro
 *  - sections of components that are defined in the frontmatter
 *  - the page body
 *************************************************************************** */

const StandardPage = ({ pageContext }) => {
  const fields = pageContext.fields;
  const pageSections = fields.sections1;
  const pageBody = pageContext.body;

  return (
    <>
      <PageContent className={fields.pageIntroduction.hasBanner ? "hasBanner" : null}>
        {fields.pageIntroduction.hasBanner && (
          <PageBanner properties={fields.pageIntroduction.banner} title={fields.pageIntroduction.pageTitle} />
        )}

        <Container>
          {!fields.pageIntroduction.hasBanner && <h1>{titleCase(fields.pageIntroduction.pageTitle)}</h1>}
          <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntroduction.pageIntro) }} />
        </Container>

        {pageSections &&
          pageSections.map(section => {
            const SectionComponent = allComponents[section.component];

            return (
              <SectionWrapper key={section.sectionID}>
                <SectionComponent info={section} />
              </SectionWrapper>
            );
          })}
      </PageContent>
      <Container>
        <MDXRenderer>{pageBody}</MDXRenderer>
      </Container>
    </>
  );
};

StandardPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default StandardPage;
