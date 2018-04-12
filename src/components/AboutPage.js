import React from 'react'
import style from './AboutPage.module.css'

const AboutPage = ({creator, link}) => (

    <div className={style.container}>
        Created by
        <a href={link}>{creator}</a>
    </div>
);

export default AboutPage;
