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

  const clImage = data.allCloudinaryMedia.edges.filter(edge => edge.node.secure_url.includes(image));

  console.log(image);
  console.log(data.allCloudinaryMedia.edges);

  return clImage[0].node.secure_url;
};

export default useCloudinaryImage;
