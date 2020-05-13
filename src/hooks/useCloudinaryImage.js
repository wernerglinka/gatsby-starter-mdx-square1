import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const useCloudinaryImage = image => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `);
  const clImages = data.allCloudinaryMedia.edges;

  console.log(clImages);

  return clImages;
};

export default useCloudinaryImage;
