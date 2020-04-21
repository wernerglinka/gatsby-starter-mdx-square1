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
      allMdx {
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
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const pages = result.data.allMdx.edges;
  // you'll call `createPage` for each result
  pages.forEach(({ node }, index) => {
    // deliver frontmatter fields via the page context
    // will save long repetitive graphql queries in page tmeplates
    // EXPERIMENTAL what are the implications?
    const nodeContent = getNode(node.id);

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layouts/${String(nodeContent.frontmatter.template)}.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        fields: nodeContent.frontmatter,
        body: node.body,
      },
    });
  });
};
