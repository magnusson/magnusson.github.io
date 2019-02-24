module.exports = {
  siteMetadata: {
    title: `Rickard Magnusson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 825,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rickard-magnusson`,
        short_name: `magnusson`,
        start_url: `/`,
        background_color: `#1a1a1a`,
        theme_color: `#1a1a1a`,
        display: `standalone`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
