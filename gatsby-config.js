const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Asphalte-911`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
    contact_phone: `819-692-6788`
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.gray["800"],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
