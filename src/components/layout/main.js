/* global window */

import React from "react";
import PropType from "prop-types";
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { FiArrowUp } from "react-icons/fi";
import titleCase from "ap-style-title-case";
import theme from "./theme";

import Head from "../head";
import Header from "../header";
import Footer from "../footer";
import useToTop from "../../hooks/useToTop";

import "normalize-scss";
import "./layout.scss";

import useSiteMetadata from "../../hooks/useSiteMetadata";

// get shortcodes
import InlineMessage from "../shortcodes/inline-message";

import mdStringToHTML from "../../utilities/md-to-html";

import allComponents from "../index";
import { Container } from "../common-styles";
import PageBanner from "../page-banner";
import SectionWrapper from "../section-wrapper";

import { mediaSection, pageMetadata, pageHeader } from "../graphql-fragments/page-sections";

const shortcodes = { InlineMessage };

const Page = styled.div`
  background-color: #fff;
  padding: 0 20px 50px;
  margin-bottom: 300px;
`;

const ToTop = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: transparent;
  padding: 0;
  cursor: pointer;
  background-color: #000;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.isVisible {
    opacity: 1;

    &:hover {
      opacity: 0.6;
    }
  }

  svg {
    display: block;
    position: relative;
    top: 0;
    width: 24px;
    height: auto;
    color: #fff;
    margin: 0 auto;
  }
`;

const PageContent = styled.div`
  padding-top: 120px;

  &.hasBanner {
    padding-top: 0;
  }
`;

const PageIntro = styled.div`
  font-size: 1.125rem;
`;

const PageBg = styled.div`
  background-color: #fff;
`;

/** ***************************************************************************
 *  Default Page Layout
 *
 * - uses ThemeProvider from emotion-theming
 * - uses MDXProvider to allow injection of shortcodes without importing them
 *
 *  Notice the PageBg component. This is necessary so the footer is not
 *  shinning through when the page is faded-in
 *************************************************************************** */

const StandardPage = ({ data: { mdx } }) => {
  console.log(mdx);

  const toTopIsVisible = useToTop();
  const siteMetadata = useSiteMetadata();
  const fields = mdx.frontmatter;
  const pageSections = fields.sections;

  return (
    <ThemeProvider theme={theme}>
      <Head metaData={siteMetadata} />
      <Header siteTitle={siteMetadata.title} />

      <MDXProvider components={shortcodes}>
        <PageBg>
          <Page className="hasTransition">
            <PageContent className={fields.hasBanner ? "hasBanner" : null}>
              {fields.hasBanner && <PageBanner properties={fields.banner} title={fields.pageTitle} />}

              <Container>
                {!fields.hasBanner && <h1>{titleCase(fields.pageTitle)}</h1>}
                <PageIntro dangerouslySetInnerHTML={{ __html: mdStringToHTML(fields.pageIntro) }} />
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
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Container>
          </Page>
        </PageBg>
      </MDXProvider>

      <Footer />

      <ToTop href="#pageTop" className={toTopIsVisible ? "isVisible" : null}>
        <FiArrowUp />
      </ToTop>
    </ThemeProvider>
  );
};

StandardPage.propTypes = {
  data: PropType.shape().isRequired,
};

export default StandardPage;

export const pageQuery = graphql`
  query pagesQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        ...pageMetadata
        ...pageHeader
        sections {
          ...mediaSection
        }
      }
    }
  }
`;
