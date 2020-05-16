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

  const allImages = [];
  data.allCloudinaryMedia.edges.map(edge => allImages.push(edge.node.secure_url));

  // "*" is for return all images
  // if (image === "*") {
  //  return allImages;
  // }

  // and here we only return the one requested in "image"
  return allImages.filter(item => item.includes(image));
};

export default useCloudinaryImage;
