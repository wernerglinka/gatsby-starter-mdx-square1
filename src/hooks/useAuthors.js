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
    const temp = {
      name: edge.node.childAuthorsJson.name,
      position: edge.node.childAuthorsJson.position,
      avatar: edge.node.childAuthorsJson.avatar,
      bio: edge.node.childAuthorsJson.bio,
      socialLinks: {
        twitter: edge.node.childAuthorsJson.twitter,
        facebook: edge.node.childAuthorsJson.facebook,
        linkedIn: edge.node.childAuthorsJson.linkedIn,
      },
      filePath: edge.node.relativePath,
    };
    allAuthors.push(temp);
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
    // thisAutor is a string with the path the author file, e.g.: content/data/authors/alexandria-ocasio-cortez.json
    // authors in allAuthors have a relative file path, e.g.: authors/alexandria-ocasio-cortez.json
    // if thisAuthor includes the authors relative path the authors file has been found
    const author = allAuthors.filter(oneAuthor => thisAuthor.includes(oneAuthor.filePath));
    return author;
  }

  return allAuthors;
};

export default useAuthors;
