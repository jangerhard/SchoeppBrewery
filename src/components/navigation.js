import React from 'react'
import style from './navigation.module.css'
import Link from 'gatsby-link';

const NavigationHeader = () => (
    <div className={style.background}>
        <div className={style.container}>
            <Link to={"/habadenero/"} className={style.link} data-ripple="true">
                Haba DeNero
            </Link>
            <Link to={"/lillemy/"} className={style.link} data-ripple="true">
                Lille My
            </Link>
        </div>
    </div>
);

export default NavigationHeader;
