/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CV - Pedro Barros`,
    siteUrl: `https://pedrobarrosc.netlify.app`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    `gatsby-plugin-postcss`,  // Solo esto para v3 – PostCSS maneja Tailwind automáticamente
  ]
};