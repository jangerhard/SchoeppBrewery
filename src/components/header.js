import React from 'react'
import Link from 'gatsby-link'
import SVGText from "./SVGText";
import styles from './header.module.css';

const Header = ({siteTitle}) => (
    <div
        className={styles.container}
    >

        <div
            className={styles.main}
        >

            { false &&
                <SVGText text="SB" height={75} width={75}/>
            }

            <h1 style={{margin: 0}}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </div>
);

export default Header
