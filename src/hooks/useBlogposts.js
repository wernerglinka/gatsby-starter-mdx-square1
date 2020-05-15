import { useStaticQuery, graphql } from "gatsby";
import useAuthors from "./useAuthors";

/** ***************************************************************************
 *  useBlogposts
 *
 *  Get all blogposts filter out the blog landing page and return a normalized
 *  array of blogposts.
 *  Blogposts may be filtered for a single categoy or "all"
 *  Blogposts may be returned for a specific year or "all"
 *
 *  Notes:
 *  - filter out the file with template set to "blog" as that is the blog
 *    landing page
 *  - since blogpost authors are really a reference to the authors file we
 *    need to convert them into real names. It is imperative that the
 *    file name reflects the name that is used in the file name. For example:
 *    "Barack Obama" =>  "/content/data/authors/barack-obama.json"
 *************************************************************************** */
const useBlogposts = (year = "all", category) => {
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
            }
          }
        }
      }
    }
  `);

  // normalize object
  const temp = data.allBlogposts.edges.map(blogpost => {
    // convert a file reference to a normal name
    const authors = blogpost.node.frontmatter.author.map(author =>
      author
        .replace("content/data/authors/", "")
        .replace(".json", "")
        .replace(/-/g, " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ")
    );
    return {
      template: blogpost.node.frontmatter.template,
      title: blogpost.node.frontmatter.pageIntroduction.pageTitle,
      link: blogpost.node.fields.slug,
      thumbnail: blogpost.node.frontmatter.thumbnail,
      author: authors,
      category: blogpost.node.frontmatter.category,
      tags: blogpost.node.frontmatter.tags,
    };
  });
  // filter out the blog landing page
  const allBlogposts = temp.filter(post => post.template !== "blog");

  // filter by category
  const blogpostsByCategory = allBlogposts.filter(blogpost => blogpost.category === category || category === "all");

  // return a year if not "*"
  if (year !== "all") {
    return blogpostsByCategory.filter(post => post.link.includes(year));
  }
  // default return all
  return blogpostsByCategory;
};

export default useBlogposts;
