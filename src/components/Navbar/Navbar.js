import React from 'react';
import ss from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={ss.nav}>
            <div className={`${ss.item} ${ss.active}`}>
                <a href="#">Profile</a>
            </div>
            <div className={ss.item}>
                <a href="#">Messages</a>
            </div>
            <div className={ss.item}>
                <a href="#">My Clans</a>
            </div>
            <div className={ss.item}>
                <a href="#">Statistics</a>
            </div>
            <br/>
            <div className={ss.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;