import { graphql } from "gatsby";

export const pageMetadata = graphql`
  fragment pageMetadata on MdxFrontmatter {
    metaTitle
    metaDescription
  }
`;

export const pageHeader = graphql`
  fragment pageHeader on MdxFrontmatter {
    pageTitle
    pageIntro
    hasBanner
    banner {
      bgImage
    }
  }
`;

export const mediaSection = graphql`
  fragment mediaSection on MdxFrontmatterSections {
    type
    template
    hasBackground
    bgColor
    bgIsDark
    bgImage
    inContainer
    sectionID
    component
    targetID
    title
    subtitle
    content
    isExternal
    linkURL
    linkText
    imageLeft
    image
  }
`;
