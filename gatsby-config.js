module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://gatsbytest2.wpenginepowered.com/graphql`,

        schema: {
          exclude: [
            `WpPluginConnectionType`,
            `WpThemeConnectionType`,
            `WpEnqueuedScriptConnectionType`,
            `WpEnqueuedStylesheetConnectionType`,
            `WpActionMonitorActionConnectionType`,
          ],
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
  ],
}
