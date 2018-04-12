import React from 'react'
import style from './Footer.module.css'

const Footer = ({creator, link}) => (
<div className={style.background}>
    <div className={style.container}>
        Created by
        <a href={link}>{creator}</a>
    </div>
</div>
);

export default Footer;
