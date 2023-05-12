require("dotenv").config()

// const { languages, defaultLanguage } = require("./languages")
module.exports = {
  siteMetadata: {
    title: `Rentlio Hoteli Hr`,
    author: {
      name: `Rentlio`,
      summary: `Rentlio Hotel Landing Page`,
    },
    description: `Gomilate propuštene prilike zbog zastarjelog hotelskog sustava? Kako uštedjeti, poboljšati učinkovitost i povećati prihode - budite među prvima koji će saznati što Rentlio sprema!`,
    siteUrl: `https://localhost:8003/`,
    image: `/ogimage.png`,
    social: {
      twitter: `Rentlio`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     includeInDevelopment: true, // optional parameter to include script in development
    //     id: 2862968,
    //     sv: 6,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: process.env.GOOGLE_TAGMANAGER_ID,

    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // Defaults to false
    //     enableWebVitalsTracking: true,
    //     // // Defaults to https://www.googletagmanager.com
    //     // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-7253KF10CK", // Google Analytics / GA
    //       // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
    //       // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: "OPT_CONTAINER_ID",
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,500,700,900`, `Barlow\:600`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`en`, `hr`],
    //     defaultLanguage: `hr`,

    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     siteUrl: `https://example.com/`,
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/:lang?",
    //         getLanguageFromPath: false,
    //         // excludeLanguages: ["es"],
    //       },
    //       {
    //         matchPath: "/preview",
    //         languages: ["en", "hr"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rentlio Hoteli Landing Page`,
        short_name: `Prijavi se I Otkrij što Rentlio priprema. Otkrij Rentlio Pro.`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rentlio-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
