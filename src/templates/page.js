import React from "react";
import PropType from "prop-types";
import styled from "@emotion/styled";
import mdStringToHTML from "../utilities/md-to-html";

import components from "../components/index";
import { Container } from "../components/common-styles";
import SectionWrapper from "../components/section-wrapper";

const PageContent = styled.div``;

/** ***************************************************************************
 *  Home page
 *************************************************************************** */

const Page = ({ fields }) => {
  const pageSections = fields.sections;
  return (
    <PageContent>
      <Container>
        <h1>{fields.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.prose) }} />
      </Container>

      {pageSections.map(section => {
        const SectionComponent = components[section.component];
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
