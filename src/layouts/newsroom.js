/* global window */

import React from "react";
import PropType from "prop-types";
import styled from "@emotion/styled";
import titleCase from "ap-style-title-case";

import mdStringToHTML from "../utilities/md-to-html";

import allComponents from "../components/index";
import { Container } from "../components/common-styles";
import PageBanner from "../components/page-banner";
import SectionWrapper from "../components/page-section-wrapper";

import InfoCard from "../components/info-card";

import getNewsroomItems from "../hooks/useNewsroom";
import NewsList from "../components/news-list";

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
 *  Newsroom Page Template
 *  This page layout renders a list of all news items
 *************************************************************************** */

const NewsroomPage = ({ pageContext }) => {
  const fields = pageContext.fields;
  const newsroomItems = getNewsroomItems();

  return (
    <>
      <PageContent className={fields.hasBanner ? "hasBanner" : null}>
        {fields.hasBanner && <PageBanner properties={fields.banner} title={fields.pageTitle} />}

        <Container>
          {!fields.hasBanner && <h1>{titleCase(fields.pageTitle)}</h1>}
          <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntro) }} />

          <NewsList items={newsroomItems} listItemComponent={InfoCard} />
        </Container>
      </PageContent>
    </>
  );
};

NewsroomPage.propTypes = {
  pageContext: PropType.shape().isRequired,
};

export default NewsroomPage;
