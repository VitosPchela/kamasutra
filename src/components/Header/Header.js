import React from 'react';
import ss from './Header.module.css';

const Header = () => {
    return (
        <header className={ss.main}>
            <img className={ss.img} src="https://pngimg.com/uploads/battlefield/battlefield_PNG78.png" alt="logo"/>

        </header>
    );
}

export default Header;