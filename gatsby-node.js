const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath
      value: `${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter, getNode }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPages: allMdx {
        edges {
          node {
            id
            body
            fields {
              slug
            }
          }
        }
      }
      blogTags: allMdx(filter: { fileAbsolutePath: { glob: "**/content/pages/blog/**/*.mdx" } }) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      blogCategories: allMdx(filter: { fileAbsolutePath: { glob: "**/content/pages/blog/**/*.mdx" } }) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      allAuthorsJson {
        edges {
          node {
            name
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }

  // build the allAuthors array
  const allAuthors = result.data.allAuthorsJson.edges.map(edge => edge.node);

  // build the blog categories array
  const blogCategories = [];
  result.data.blogCategories.group.forEach(category => blogCategories.push(category.fieldValue));
  // remove category duplication from list
  const allCategories = [...new Set(blogCategories)];

  // build the blog tags array
  const blogTags = [];
  result.data.blogTags.group.forEach(tag => blogTags.push(tag.fieldValue));
  // remove tag duplications from list
  const allTags = [...new Set(blogTags)];

  /** ***************************************************************************
   *  Create all pages
   *************************************************************************** */
  const pages = result.data.allPages.edges;

  pages.forEach(({ node }, index) => {
    // deliver frontmatter fields via the page context
    // will save long repetitive graphql queries in page templates
    // EXPERIMENTAL what are the implications?
    const nodeContent = getNode(node.id);

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/layouts/${String(nodeContent.frontmatter.template)}.js`),
      context: {
        id: node.id,
        fields: nodeContent.frontmatter,
        body: node.body,
        blogCategories: allCategories,
        blogTags: allTags,
      },
    });
  });

  /** ***************************************************************************
   *  Create a page per blog category
   *************************************************************************** */
  allCategories.forEach(category => {
    const fields = {
      pageIntroduction: {
        pageTitle: `Blogposts of type: ${category}`,
      },
      category,
    };

    createPage({
      path: `/blog/${category.replace(/\s+/g, "-")}`,
      component: path.resolve("./src/layouts/blog.js"),
      context: {
        fields,
        blogCategories: allCategories,
        blogTags: allTags,
        pageType: "blogCategory",
      },
    });
  });

  /** ***************************************************************************
   *  Create a page per author
   *************************************************************************** */
  allAuthors.forEach(author => {
    const fields = {
      pageIntroduction: {
        pageTitle: `Blogposts by: ${author.name}`,
      },
      author: author.name,
    };

    createPage({
      path: `/blog/${author.name.replace(/\s+/g, "-").toLowerCase()}`,
      component: path.resolve("./src/layouts/blog.js"),
      context: {
        fields,
        blogCategories: allCategories,
        blogTags: allTags,
        pageType: "blogAuthor",
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      tags: [String]
      category: String
      data: Date
      author: [String]
    }
  `;
  createTypes(typeDefs);
};
