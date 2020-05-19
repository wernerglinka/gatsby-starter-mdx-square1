import React from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import mdStringToHTML from "../../utilities/md-to-html";

import { TabsContainer, TabsHeader, TabsContent } from "./tabs-styles";

/** ***************************************************************************
 *  Tabs/Accordion Component
 *
 *  Component will switch to accordion on small screen and can also be forced
 *  to render as an Accordion with isAccordion === true
 *************************************************************************** */
const Tabs = props => {
  const { title, intro, header, content, isAccordion } = props;
  console.log(props);
  return (
    <TabsContainer>
      {title && <h2>{titleCase(title)}</h2>}
      {intro && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(intro) }} />}
      <TabsHeader>
        {header.map(item => (
          <li>
            <button type="button">{item.name}</button>
          </li>
        ))}
      </TabsHeader>
      <TabsContent>
        {content.map(item => (
          <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />
        ))}
      </TabsContent>
    </TabsContainer>
  );
};

export default Tabs;

Tabs.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  header: PropTypes.shape().isRequired,
  content: PropTypes.shape().isRequired,
  isAccordion: PropTypes.bool.isRequired,
};

Tabs.defaultProps = {
  title: null,
  intro: null,
};
