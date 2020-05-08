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
  // if the image is located in a folder then Forestry will use /<folder name>/filename.<ext>
  // so we check if the original name, which is just the filename is included
  let temp;
  data.allFile.edges.map(edge => {
    if (thisImage.includes(edge.node.childImageSharp.fluid.originalName)) {
      temp = edge.node.childImageSharp.fluid;
    }
  });
  return temp;
};

export default useBgImage;
