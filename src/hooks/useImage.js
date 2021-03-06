import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useImage = thisImage => {
  const data = useStaticQuery(graphql`
    query getImage {
      allFile(filter: { extension: { regex: "/(jpg)|(png)/" } }) {
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

  // Gatsby graphql doesn't accept variables, ergo we get all images
  // and then match the file name.
  // path to folder is determined by gatsby-plugin-filesystem
  let image;
  data.allFile.edges.map(edge => {
    if (thisImage.includes(edge.node.childImageSharp.fluid.originalName)) {
      image = edge.node.childImageSharp.fluid;
    }
  });
  return image;
};

export default useImage;
