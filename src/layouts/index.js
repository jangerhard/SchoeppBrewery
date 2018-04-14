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

            <div className={styles.image}>
                <image style={{
                    src: "url(https://lh3.googleusercontent.com/1VgtlWnlo1KGk8YxVENeNdvLiOkuVLeCiItBdBp5H_Un7WeNnbfRDWph1rCyD49Fx5WuZZ789boqgXLUMCdpXX0YPij_aGwitWIGYd_tFP_nzD0iKD_HnRZF9W2uyjnmM4oFK-8a0Dic1cz31z0-d4R3jeXhSCZiP_wgGkhsZhrDwn2MOL4eVXftb_ed5ZcqzySGo5LOewrFK4sZF8kxVhiPpUNHs7obnyBWKiW4XARcsd6l3q6hRhXXlZdBHoQ49RoCwoEl6WQAYV6QuVCbi7Is0BlViQZA66ohQFCH3SHh6zTepIwaRMLOLLRaY5EEfYPYx0UN4fKt3AZUEvKGAvEdsgeyYkIhHk8F2qmR0URaH0uyOrVHT3Q7jrQPGS7rNxOXY_oP7Kv8UqTOhKfuIaPRZoa9R00LKePDqOUkJqzcvuMYJ4OKdbqwWEQF3ueDFQdYhPhW6UeRGhxlW-1b8oFigIMQN0zKWlm6UYAO5XndHyjuTNHJQZkeHTrEP8CuTz77-J9hksiHSAf3N9-LfH3F8x1MK0SVa1Q4AWJmZKcehUEzaXV3FJZROXAy3AUk4o9h-fV6boC5194ENg5pwEhEpYIgk9vN1Gt9n0ma=w1066-h709-no)",
                    width: "100%",
                    height: "auto"
                }} />
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
