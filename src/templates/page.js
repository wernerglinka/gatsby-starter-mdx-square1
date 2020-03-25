import React from "react";
import PropType from "prop-types";
import styled from "@emotion/styled";
import mdStringToHTML from "../utilities/md-to-html";

import components from "../components/index";
import { Container } from "../components/common-styles";

const PageContent = styled.div`
  .section-container {
    margin: 50px auto;
  }
  .has-background {
    background-color: #f8f8f8;
    padding: 20px;
  }
  .full-width {
    margin: 50px -20px;
    padding: 20px;
  }
`;

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

        /* section with background inside a container */
        if (section.has_background && section.in_container) {
          return (
            <Container key={section.section_id} className="section-container has-background in-container">
              <SectionComponent key={section.section_id} info={section} />
            </Container>
          );
        }

        /* section with background streching full width */
        if (section.has_background && !section.in_container) {
          return (
            <div key={section.section_id} className="section-container has-background full-width">
              <SectionComponent key={section.section_id} info={section} />
            </div>
          );
        }

        /* section with no background inside a container */
        if (!section.has_background && section.in_container) {
          return (
            <Container key={section.section_id} className="section-container  in-container">
              <SectionComponent key={section.section_id} info={section} />
            </Container>
          );
        }

        /* section with no background streching full width */
        return (
          <div key={section.section_id} className="section-container  full-width">
            <SectionComponent key={section.section_id} info={section} />
          </div>
        );
      })}
    </PageContent>
  );
};

Page.propTypes = {
  fields: PropType.shape().isRequired,
};

export default Page;
