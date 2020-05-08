import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useSiteImage = thisImage => {
  // const relativePath = "banners/home.jpg";

  const data = useStaticQuery(graphql`
    query getSiteImage {
      allFile(filter: { relativeDirectory: { eq: "site-images" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 800) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  // Gatsby graphql doesn't accept variables, ergo we get all images in folder banner
  // and then match the file name.
  // path to folder is determined by gatsby-plugin-filesystem
  let siteImage;
  data.allFile.edges.map(edge => {
    if (thisImage.includes(edge.node.childImageSharp.fluid.originalName)) {
      siteImage = edge.node.childImageSharp.fluid;
    }
  });

  return siteImage;
};

export default useSiteImage;
