import React from "react";
import PropType from "prop-types";
import mdStringToHTML from "../utilities/md-to-html";

import components from "../components/index";

/** ***************************************************************************
 *  Home page
 *************************************************************************** */

const Page = ({ fields }) => {
  const pageSections = fields.sections;
  return (
    <>
      <h1>{fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.prose) }} />

      {pageSections.map(section => {
        const SectionComponent = components[section.component];
        return <SectionComponent key={section.section_id} info={section} />;
      })}
    </>
  );
};

Page.propTypes = {
  fields: PropType.shape().isRequired,
};

export default Page;
