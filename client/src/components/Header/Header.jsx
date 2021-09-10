import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.Header}>
            <img src='https://t4.ftcdn.net/jpg/03/31/49/65/360_F_331496527_JFos59OitQmV5elMTVVAJUDbcunXk4Ht.jpg'
                alt='logo' className={s.HeaderLogoImg}/>
            <div className={s.HeaderLogoTitle}>
                <h2>Kudos</h2>
            </div>
        </header>
    )
};

export default Header;