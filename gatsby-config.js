module.exports = {
    siteMetadata: {
        title: 'Schoepp\'s Bryggeri',
        creator: 'Jan Schøpp',
        homepage: 'https://janschoepp.com'
    },
    plugins: ['gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
};
