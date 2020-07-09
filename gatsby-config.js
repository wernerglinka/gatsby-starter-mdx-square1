require("dotenv").config();

module.exports = {
  siteMetadata: require("./src/settings/site-metadata.json"),
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-json`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      // //////////////////////////////////////////////////////////////////////////////////
      // Source all page markdown files
      // //////////////////////////////////////////////////////////////////////////////////
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        type: `upload`,
        resourceType: `image`,
        maxResults: 300,
        prefix: `gatsby-square1/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans:300,400,500`, `Lato:300, 400`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-square1-mdx`,
        short_name: `square1`,
        start_url: `/`,
        icon: `content/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/GlobalStyleComponent`,
        props: {
          theme: `src/styles/theme`,
        },
      },
    },
    {
      // //////////////////////////////////////////////////////////////////////////////////
      // RSS Feed with blog posts
      // //////////////////////////////////////////////////////////////////////////////////
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteURL
              }
            }
          }
        `,
        setup: () => ({
          title: "Square1 Blog",
          description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.frontmatter.pageIntroduction.pageTitle,
                  url: site.siteMetadata.siteURL + edge.node.fields.slug,
                  guid: site.siteMetadata.siteURL + edge.node.fields.slug,
                  date: edge.node.frontmatter.date,
                  description: edge.node.frontmatter.pageIntroduction.pageIntro,
                  enclosure: {
                    url: `https://res.cloudinary.com/glinkaco/image/upload/v1589395438/gatsby-square1/site-images/sample3_xhpwze.jpg`,
                    type: "image/jpg",
                  },
                });
              });
            },
            query: `
              {
                allMdx(filter: {fileAbsolutePath: {glob: "**/content/pages/blog/**/*.mdx"}, frontmatter: {template: {eq: "blog-post"}}}) {
                  edges {
                    node {
                      frontmatter {
                        pageIntroduction {
                          pageTitle
                          pageIntro
                        }
                        date
                      }
                      fields {
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog.xml",
            title: "Square1 Blog Feed",
          },
        ],
      },
    },
  ],
};
