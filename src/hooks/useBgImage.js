import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Gatsby graphql doesn't accept variables, so get all images in folder banner
// and then match the file name.
// path to folder is determined by gatsby-plugin-filesystem
const useBgImage = thisImage => {
  const data = useStaticQuery(graphql`
    query getBgImage {
      allFile(filter: { relativeDirectory: { eq: "banners" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1600) {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  const temp = data.allFile.edges.filter(edge => edge.node.childImageSharp.fluid.originalName === thisImage);
  return temp[0].node.childImageSharp.fluid;
};

export default useBgImage;
