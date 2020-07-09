import { useStaticQuery, graphql } from "gatsby";
import useAuthors from "./useAuthors";
import useSiteMetadata from "./useSiteMetadata";

/** ***************************************************************************
 *  useBlogposts
 *
 *  Get all blogposts filter out the blog landing page and return a normalized
 *  array of blogposts.
 *  Blogposts may be filtered for a
 *  - single categoy or "all"
 *  - single author or "all"
 *  - quantity
 *  - specific year or "all"
 *
 *  Notes:
 *  - filter-out the file with template set to "blog" as that is the blog
 *    landing page
 *  - since blogpost authors are a reference to the authors file we
 *    need to convert them into real names. It is imperative that the
 *    file name reflects the name that is used in the file name. For example:
 *    "Barack Obama" =>  "/content/data/authors/barack-obama.json"
 *************************************************************************** */
const useBlogposts = props => {
  const { numberPosts, byCategory, byAuthor, byYear, excludePost } = props;
  const data = useStaticQuery(graphql`
    query getBlogposts {
      allBlogposts: allMdx(
        filter: {
          fileAbsolutePath: { glob: "**/content/pages/blog/**/*.mdx" }
          frontmatter: { template: { ne: "blog" } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
              pageIntroduction {
                pageTitle
              }
              thumbnail
              category
              tags
              author
              date
            }
          }
        }
      }
    }
  `);

  // normalize object
  const temp = data.allBlogposts.edges.map(blogpost => {
    // convert a file reference to a normal name
    const authors = blogpost.node.frontmatter.author.map(author => useAuthors(author)[0].name);

    // get image prefix and transfor string so we can return a fully formed image src
    const { imagePrefix } = useSiteMetadata();
    const imageTransform = `/c_scale,f_auto,q_auto:best,w_300`;

    // return a normalized object
    return {
      template: blogpost.node.frontmatter.template,
      title: blogpost.node.frontmatter.pageIntroduction.pageTitle,
      thumbnail: `${imagePrefix}${imageTransform}${blogpost.node.frontmatter.thumbnail}`,
      date: blogpost.node.frontmatter.date,
      author: authors,
      category: blogpost.node.frontmatter.category,
      tags: blogpost.node.frontmatter.tags,
      cta: {
        URL: blogpost.node.fields.slug,
        text: "Read the Blogpost",
        isExternal: false,
      },
    };
  });
  // filter out the blog landing page
  const allBlogposts = temp.filter(post => post.template !== "blog");

  // filter by category
  const blogpostsByCategory = allBlogposts.filter(blogpost => blogpost.category === byCategory || byCategory === "all");

  // filter by authors
  const blogpostByAuthor = blogpostsByCategory.filter(
    blogpost => blogpost.author.includes(byAuthor) || byAuthor === "all"
  );

  // filter by number
  let blogpostByQuantity;
  let finalDelivery;
  if (numberPosts === "all") {
    finalDelivery = blogpostByAuthor;
  } else {
    blogpostByQuantity = blogpostByAuthor.filter(blogpost => blogpost.title !== excludePost);
    finalDelivery = blogpostByQuantity.slice(0, numberPosts);
  }

  return finalDelivery;
};

export default useBlogposts;
