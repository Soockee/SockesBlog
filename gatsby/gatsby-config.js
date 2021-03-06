const config = require('./config/site');

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'json']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/logo`,
      },
    },
    {
    resolve: 'gatsby-plugin-emotion',
    options: {
      autoLabel: process.env.NODE_ENV !== 'production',
      // eslint-disable-next-line
      labelFormat: `[filename]--[local]`,
    },
  },
  {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: config.title,
      short_name: config.shortName,
      description: config.description,
      start_url: config.pathPrefix,
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: 'standalone',
      icon: config.favicon,
      icons: [
        {
          src: config.favicon144,
          sizes:  config.favicon144Size,
          type: config.favicon144Type,
        },
        {
          src: config.favicon512,
          sizes: config.favicon512Size,
          type: config.favicon512Type,
        },
      ]
    },
  }
  ],
};
