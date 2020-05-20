import React, { useState, useEffect } from "react";
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
const Tabs = ({ info }) => {
  const { title, content, tabs } = info;
  const initialOpenTab = tabs.filter(tab => tab.openOnLoad === true);
  const [openTab, setTab] = useState(initialOpenTab[0].tabID);

  return (
    <TabsContainer>
      {title && <h2>{titleCase(title)}</h2>}
      {content && <div dangerouslySetInnerHTML={{ __html: mdStringToHTML(content) }} />}
      <TabsHeader>
        {tabs.map(item => (
          <li className={item.tabID === openTab && "active"}>
            <button
              type="button"
              onClick={() => {
                setTab(item.tabID);
              }}
            >
              {item.header}
            </button>
          </li>
        ))}
      </TabsHeader>
      <TabsContent>
        {tabs.map(item => (
          <div
            id={item.tabID}
            className={item.tabID === openTab && "active"}
            dangerouslySetInnerHTML={{ __html: mdStringToHTML(item.content) }}
          />
        ))}
      </TabsContent>
    </TabsContainer>
  );
};

export default Tabs;

Tabs.propTypes = {
  info: PropTypes.shape().isRequired,
};

Tabs.defaultProps = {};
