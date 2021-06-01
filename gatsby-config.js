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
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `/src/svg/`, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `items`,
        path: `${__dirname}/src/content/items`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pros`,
        path: `${__dirname}/src/content/pros`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/content/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press`,
        path: `${__dirname}/src/content/press`,
      },
    },
  ],
};
