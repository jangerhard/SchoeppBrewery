import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from './index.module.css';

import Header from '../components/header'
import NavigationHeader from "../components/navigation";
import Footer from "../components/Footer";

const Layout = ({children, data}) => (
    <div className={styles.body}>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {
                    name: 'description',
                    content: 'A fake website showcasing real hot sauces and semi-real beers'
                },
                {
                    name: 'keywords',
                    content: 'hotsauce, schøpp, brewery, homebrew, hot, sauce'
                },
            ]}
        />

        <div className={styles.wrapper}>

            <div className={styles.header}>
                <Header siteTitle={data.site.siteMetadata.title}/>
            </div>

            <div className={styles.nav}>
                <NavigationHeader/>
            </div>

            <div className={styles.content}>
                {children()}
            </div>

            <div className={styles.footer}>
                <Footer
                    creator={data.site.siteMetadata.creator}
                    link={data.site.siteMetadata.homepage}
                />
            </div>
        </div>
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
