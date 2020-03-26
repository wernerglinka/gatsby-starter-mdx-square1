import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useBgImage = thisImage => {
  // const relativePath = "banners/home.jpg";

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

  // Gatsby graohql doesn't accept variables, ego we get all images in folder banner
  // and then match the file name.
  // path to folder is determined by gatsby-plugin-filesystem
  let bgImage;
  data.allFile.edges.map(edge => {
    if (edge.node.childImageSharp.fluid.originalName === thisImage) {
      bgImage = edge.node.childImageSharp.fluid;
    }
  });

  return bgImage;
};

export default useBgImage;
