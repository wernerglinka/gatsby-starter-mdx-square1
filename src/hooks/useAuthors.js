import { useStaticQuery, graphql } from "gatsby";
import useCloudinaryImage from "./useCloudinaryImage";

const useAuthors = (thisAuthor = "all") => {
  const data = useStaticQuery(graphql`
    {
      authorsData: allFile(filter: { relativeDirectory: { eq: "authors" } }) {
        edges {
          node {
            childAuthorsJson {
              name
              position
              avatar
              bio
              socialLinks {
                twitter
                facebook
                linkedIn
              }
            }
            relativePath
          }
        }
      }
    }
  `);
  const allAuthors = [];
  const allImages = useCloudinaryImage("all");

  // normalize authors array
  data.authorsData.edges.forEach(edge => {
    if (edge.node.childAuthorsJson) {
      allAuthors.push(edge.node.childAuthorsJson);
    }
  });

  // add image data to customer data
  allAuthors.map(author => {
    allImages.map(image => {
      if (image.includes(author.avatar)) {
        author.image = image;
      }
    });
  });

  if (thisAuthor !== "all") {
    // make names comparable

    // compare and build new array

    console.log(thisAuthor);
    console.log(allAuthors);
    // get specific authors
  }

  return allAuthors;
};

export default useAuthors;
