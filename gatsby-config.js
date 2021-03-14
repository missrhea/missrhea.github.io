
module.exports = {
  siteMetadata: {
    title: `Rhea Rodrigues`,
    author: {
      name: `Rhea Rodrigues`,
    },
    description: `Rhea's personal website. The views and opinions expressed are those of the author.`,
    siteUrl: `https://missrhea.github.io/`,
    social: {
      linkedin: `https://linkedin.com/in/rhearodrigues`,
      twitter: `https://twitter.com/rheardgs`
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: ["G-3ZVV268DLX", "UA-189753050-1"],
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/writing`,
        name: `writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/reading`,
        name: `reading`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
    
              // the github handler whose gists are to be accessed
              username: "missrhea",
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              // DEPRECATED (PLEASE USE gistDefaultCssInclude)
              includeDefaultCss: true || false,
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              gistDefaultCssInclude: true || false,
    
              // a flag indicating whether the github default gist css should be preloaded or not
              // use this if you want to load the default css asynchronously.
              // default: false
              gistCssPreload: true || false,
    
              // a string that represents the github default gist css url.
              // defaults: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
              gistCssUrlAddress: "https://github.githubassets.com/assets/gist-embed-b3b573358bfc66d89e1e95dbf8319c09.css"
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    // `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Rhea Rodrigues`,
    //     short_name: `Rhea`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `static/favicon.ico`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-dark-mode',
  ],
}
