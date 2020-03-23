module.exports = {
  siteMetadata: require("./src/data/site-metadata.json"),
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    // {
    //  resolve: `gatsby-plugin-page-transitions`,
    //  options: {
    //    transitionTime: 500,
    //  },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: `${__dirname}/src/components/layout/index.js` },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // //////////////////////////////////////////////////////////////////////////////////
      // Source all page markdown files
      // //////////////////////////////////////////////////////////////////////////////////
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utilities/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-square1-mdx`,
        short_name: `square1`,
        start_url: `/`,
        icon: `src/images/logo.png`,
      },
    },
  ],
};
