import style from './navigation.module.css'
import Link from 'gatsby-link';

const Navigation = () => (

    <div className={style.container}>
        <Link to={"/habadenero/"} className={style.link} data-ripple="true">
            Haba DeNero
        </Link>
        <Link to={"/lillemy/"} className={style.link} data-ripple="true">
            Lille My
        </Link>
    </div>
);

export default Navigation;
