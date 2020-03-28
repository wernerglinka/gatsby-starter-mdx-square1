import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useVideoThumbnail = thumbnailImage => {
  // const relativePath = "banners/home.jpg";

  const data = useStaticQuery(graphql`
    query getVideoThumbnail {
      allFile(filter: { relativeDirectory: { eq: "video-thumbnails" } }) {
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
  let videoTn;
  data.allFile.edges.map(edge => {
    if (edge.node.childImageSharp.fluid.originalName === thumbnailImage) {
      videoTn = edge.node.childImageSharp.fluid;
    }
  });

  return videoTn;
};

export default useVideoThumbnail;
