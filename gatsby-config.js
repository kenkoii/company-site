const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119873390-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    }],
}
