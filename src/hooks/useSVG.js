import React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Gatsby graphql doesn't accept variables, so get all svg images in folder images
// and then match the file name, then return publicURL.
// thisIcon is the file name of the svg file
const useSVG = thisIcon => {
  const data = useStaticQuery(graphql`
    query getIcon {
      icons: allFile(filter: { extension: { regex: "/(svg)/" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  let icon;
  data.icons.edges.map(edge => {
    if (edge.node.publicURL.includes(thisIcon)) {
      icon = edge.node.publicURL;
    }
  });

  return icon;
};

export default useSVG;
