import { useStaticQuery, graphql } from "gatsby";

/** ***************************************************************************
 *  useBlogposts
 *
 *  Get all blogposts filter out the blog landing page and return a normalized
 *  array of blogposts.
 *  Blogposts may be filtered for a single categoy or "all"
 *  Blogposts may be returned for a specific year or "all"
 *************************************************************************** */
const useBlogposts = (year = "all", category) => {
  const data = useStaticQuery(graphql`
    query getBlogposts {
      allBlogposts: allMdx(filter: { fileAbsolutePath: { glob: "**/content/pages/blog/**/*.mdx" } }) {
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
  const temp = data.allBlogposts.edges.map(blogpost => ({
    template: blogpost.node.frontmatter.template,
    title: blogpost.node.frontmatter.pageIntroduction.pageTitle,
    link: blogpost.node.fields.slug,
    thumbnail: blogpost.node.frontmatter.thumbnail,
    author: blogpost.node.frontmatter.author,
    category: blogpost.node.frontmatter.category,
    tags: blogpost.node.frontmatter.tags,
  }));
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
