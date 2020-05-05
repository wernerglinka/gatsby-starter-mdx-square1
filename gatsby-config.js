module.exports = {
  siteMetadata: require("./src/settings/site-metadata.json"),
  plugins: [
    `gatsby-plugin-sass`,
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
    `gatsby-background-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
            variants: [`400`, `500`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `500`],
          },
        ],
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
  ],
};
