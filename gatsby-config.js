module.exports = {
  siteMetadata: {
    title: 'WWOM',
    description:
      'WWOM est un outil en ligne indispensable pour générer de nouveaux clients. Passez plus de temps avec vos clients, moins de temps à en chercher.',
    siteUrl: `https://www.wwom.io`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-svgr',

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/decouvrir`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WWOM`,
        short_name: `WWOM`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#38647F`,
        display: `standalone`,
        icon: `${__dirname}/src/svg/icon.svg`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site`,
        path: `${__dirname}/src/content/site`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `index`,
        path: `${__dirname}/src/content/pages/index/root`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `indexHero`,
        path: `${__dirname}/src/content/pages/index/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `indexPros`,
        path: `${__dirname}/src/content/pages/index/pros`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `indexServices`,
        path: `${__dirname}/src/content/pages/index/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `indexPress`,
        path: `${__dirname}/src/content/pages/index/press`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `discoverHero`,
        path: `${__dirname}/src/content/pages/discover/hero`,
      },
    },
  ],
};
