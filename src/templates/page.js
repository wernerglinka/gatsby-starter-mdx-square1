import React from "react";
import PropType from "prop-types";
import styled from "@emotion/styled";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../utilities/md-to-html";

import components from "../components/index";
import { Container } from "../components/common-styles";
import PageBanner from "../components/page-banner";
import SectionWrapper from "../components/section-wrapper";

const PageContent = styled.div`
  padding-top: 120px;

  &.hasBanner {
    padding-top: 0;
  }
`;

const PageIntro = styled.div`
  font-size: 1.125rem;
`;

/** ***************************************************************************
 *  Home page
 *************************************************************************** */

const Page = ({ fields }) => {
  const pageSections = fields.sections;

  return (
    <PageContent className={fields.hasBanner ? "hasBanner" : null}>
      {fields.hasBanner && <PageBanner properties={fields.banner} title={fields.pageTitle} />}

      <Container>
        {!fields.hasBanner && <h1>{titleCase(fields.pageTitle)}</h1>}
        <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntro) }} />
      </Container>

      {pageSections.map(section => {
        const SectionComponent = components[section.component];
        console.log(SectionComponent);
        return (
          <SectionWrapper key={section.sectionID}>
            <SectionComponent info={section} />
          </SectionWrapper>
        );
      })}
    </PageContent>
  );
};

Page.propTypes = {
  fields: PropType.shape().isRequired,
};

export default Page;
