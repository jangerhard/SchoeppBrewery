import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import NavigationHeader from "../components/navigation";
import Footer from "../components/Footer";

const Layout = ({children, data}) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {name: 'description', content: 'A fake website showcasing real hot sauces and semi-real beers'},
                {name: 'keywords', content: 'hotsauce, schøpp, brewery, homebrew, hot, sauce'},
            ]}
        />
        <Header siteTitle={data.site.siteMetadata.title}/>
        <NavigationHeader/>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.0875rem 1.45rem',
            }}
        >
            {children()}
        </div>
        <Footer
            creator={data.site.siteMetadata.creator}
            link={data.site.siteMetadata.homepage}
        />
    </div>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        creator
        homepage
      }
    }
  }
`;
